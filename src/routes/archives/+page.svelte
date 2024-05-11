<script lang="ts">
	import Loading from "$lib/components/commons/Loading.svelte";
	import TeamMiniArchive from "$lib/components/hibiscus-cup/TeamMiniArchive.svelte";
	import { HIBISCUS_CUP_MAIN_STREAM_TWITCH_ID, HIBISCUS_CUP_STREAMERS } from "$lib/members";
	import type { HibiscusCupTeamName } from "$lib/types/HibiscusCupTeamName";
	import type { ITwitchVideo, ITwitchVideoResponse, TwitchStream, TwitchStreamResponse, TwitchUser, TwitchUserResponse } from "$lib/types/Twitch";
    import axios from 'redaxios';
	import { onMount } from "svelte";
    import ArchiveViewer from "$lib/components/hibiscus-cup/ArchiveViewer.svelte";

    /**
     * 配信情報の取得キャンセルID
     */
    let updateStreamCancelId: number | null = null;
    /**
     * チーム名
     */
    const teamNames: HibiscusCupTeamName[] = ['本配信', 'A', 'B', 'C', 'D', 'E', 'F'];
    /**
     * 配信者情報
     */
    let twitchUsers: {[key in HibiscusCupTeamName]: TwitchUser[]} = {'本配信': [], 'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': []};
    /**
     * アーカイブ,ダイジェスト情報
     */
    let twitchArchives: ITwitchVideo[] = [];
    /**
     * 表示中のストリーマーのアーカイブ
     */
    let showUserArchives: ITwitchVideo[] | null = [];
    /**
     * 表示中の配信
     */
    let showStream: TwitchStream | null = null;
    /**
     * 表示中のストリーマー
     */
    let selectedStream: { 
        streamer: TwitchUser | null,  
        archives: ITwitchVideo[]
    } = { streamer: null, archives: [] };
    /**
     * 配信を表示できるか
     */
    $: canShowStream = showStream !== null;
    /**
     * 初期化が終了したか
     */
    let finishedInit = false;

    /**
     * 配信者のTwitch情報を取得
     */
    const fetchUsers = async () => {
        const names = HIBISCUS_CUP_STREAMERS.map(streamer => streamer.twitch);
        const response = await axios.post<TwitchUserResponse>(
            '/api/twitch/users',
            { names: names }
        );
        const users = response.data.users;
        return users;
    }

    /**
     * 配信者のTwitch配信情報を取得
     */
    const fetchArchives = async() => {
        const archive_ids_array = HIBISCUS_CUP_STREAMERS.map(streamer => streamer.archive_ids);
        const digest_ids_array = HIBISCUS_CUP_STREAMERS.map(streamer => streamer.digest_ids);
        const response = await axios.post<ITwitchVideoResponse>(
            '/api/twitch/videos',
            {archive_ids: archive_ids_array.flat(), digest_ids: digest_ids_array.flat()}
        );

        const videos = response.data.videos;
        const orderd = videos.sort(video => Number(video.id));
        return orderd;
    }

    /**
     * 表示する配信情報を変更
     * @param event TeamMiniArchiveのアイコンクリックイベント
     */
    const onClickStreamer = (event: any) => {
        changeShowStream(event)
    }

    /**
     * 表示する配信情報を変更
     * @param event TeamMiniArchiveのアーカイブ情報取得イベント
     */
    const onFetchedArchives = (event: any) => {
        changeShowStream(event)
    }

    /**
     * 表示する配信情報を変更
     * @param clickEvent TeamMiniArchiveのイベント
     */
    const changeShowStream = (event: any) => {
        selectedStream = event.detail;
    }

    onMount(async ()  => {
        let users = await fetchUsers();
        for (const team of teamNames) {
            const teamStreamerIds = HIBISCUS_CUP_STREAMERS.
                filter(streamer => streamer.team === team).
                map(streamer => streamer.twitch_id);
            const teamStreamers = users.filter(user => teamStreamerIds.includes(user.id));
            twitchUsers[team] = teamStreamers;
        }

        twitchArchives = await fetchArchives();

        initSelectStreamer();

        finishedInit = true;
    })

    /**
     * 最初はりえぺこさんを固定で表示
     */
    const initSelectStreamer = () => {
        const riepeko = twitchUsers["本配信"][0]
        const archives = twitchArchives.filter(archive => archive.user_id === riepeko.id);
        selectedStream = { streamer: riepeko, archives: archives };
    }
</script>


{#if finishedInit}
    <ArchiveViewer {selectedStream} />

    <div class="mx-auto flex justify-center">
        <TeamMiniArchive teamName={'本配信'} {twitchUsers} {twitchArchives} on:click={onClickStreamer}/>
    </div>

    <div class="mx-auto flex flex-wrap justify-center w-2/3">
    {#each teamNames as name}
        {#if name !== '本配信'}
            <TeamMiniArchive teamName={name} {twitchUsers} {twitchArchives} on:click={onClickStreamer}/>
        {/if}
    {/each}
    </div>
{:else}
    <Loading />
{/if}