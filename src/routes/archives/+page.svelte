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

        finishedInit = true;
    })
</script>


{#if finishedInit}
    <ArchiveViewer {selectedStream} />

    <div class="mx-auto flex justify-center">
        <TeamMiniArchive teamName={'本配信'} twitchUsers={twitchUsers['本配信']} on:click={onClickStreamer} on:fetchedArchives={onFetchedArchives}/>
    </div>

    <div class="mx-auto flex flex-wrap justify-center w-2/3">
    {#each teamNames as name}
        {#if name !== '本配信'}
            <TeamMiniArchive teamName={name} twitchUsers={twitchUsers[name]} on:click={onClickStreamer}/>
        {/if}
    {/each}
    </div>
{:else}
    <Loading />
{/if}