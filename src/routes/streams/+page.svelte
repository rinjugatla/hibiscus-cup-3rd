<script lang="ts">
    import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { onDestroy, onMount } from 'svelte';
    import axios from 'redaxios';
	import type { TwitchStream, TwitchStreamResponse, TwitchUser, TwitchUserResponse } from '$lib/types/Twitch';
	import { HIBISCUS_CUP_MAIN_STREAM_TWITCH_ID, HIBISCUS_CUP_STREAMERS } from '$lib/members';
	import TeamMini from '$lib/components/hibiscus-cup/TeamMini.svelte';
	import Loading from '$lib/components/commons/Loading.svelte';
    import { page } from '$app/stores';
    
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
     * 配信情報
     */
    let twitchStreams: TwitchStream[] = [];
    /**
     * 表示中の配信
     */
    let showStream: TwitchStream | null = null;
    /**
     * 表示中のストリーマー
     */
    let showUser: TwitchUser | null = null;
    /**
     * 配信を表示できるか
     */
    $: canShowStream = showStream !== null;

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
    const fetchStreams = async() => {
        const names = HIBISCUS_CUP_STREAMERS.map(streamer => streamer.twitch);
        const response = await axios.post<TwitchStreamResponse>(
            '/api/twitch/streams',
            {names: names}
        );
        const streams = response.data.streams;
        return streams;
    }

    /**
     * Twitch配信情報を更新
     */
    const updateStreams = async () => {
        let streams = await fetchStreams();
        twitchStreams = streams;
    }

    /**
     * 配信の表示を初期化
     * 
     * ランダムな配信または配信者を表示
     */
    const initShowStream = () => {
        const existsMainStream = twitchStreams.filter(stream => stream.user_id === HIBISCUS_CUP_MAIN_STREAM_TWITCH_ID).length > 0;
        if (existsMainStream){ 
            showUser = null;
            showStream = twitchStreams.filter(stream => stream.user_id === HIBISCUS_CUP_MAIN_STREAM_TWITCH_ID)[0];
            return;
        }

        const existsStream = twitchStreams.length > 0;
        if (existsStream){
            const randomStream = getRandomStream();
            showUser = null;
            showStream = randomStream;
            return;
        }

        // 配信は一つも存在しない場合はランダムなユーザの情報を表示
        const randomUser = getRandomUser();
        showUser = randomUser;
        showStream = null;
    }

    /**
     * ランダムに配信者を取得
     */
    const getRandomUser = () => {
        let users: TwitchUser[] = [];
        for (const key in twitchUsers) {
            const teamUsers = twitchUsers[key as HibiscusCupTeamName];
            users = [...users, ...teamUsers];
        }
        const randomIndex = Math.floor(Math.random() * users.length);
        const randomUser = users[randomIndex];
        return randomUser;
    }

    /**
     * ランダムな配信情報を取得
     */
    const getRandomStream = () => {
        const existsStream = twitchStreams.length > 0;
        if (!existsStream){ return null; }

        const randomIndex = Math.floor(Math.random() * twitchStreams.length);
        const randomStream = twitchStreams[randomIndex];
        return randomStream;
    }

    /**
     * 表示する配信情報を変更
     * @param clickEvent TeamMiniのアイコンクリックイベント
     */
    const changeShowStream = (clickEvent: any) => {
        showStream = clickEvent.detail.stream;
        showUser = clickEvent.detail.streamer;
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

        // 初回読み込みは即時実行
        await updateStreams();
        // 以降は一定時間毎に実行
        const updateInterval = 3 * 60 * 1000;
        updateStreamCancelId = setInterval(async () => { await updateStreams() }, updateInterval);

        initShowStream();
    })

    onDestroy(() => {
        if (updateStreamCancelId){ clearInterval(updateStreamCancelId); }
    })
</script>

{#if twitchUsers.A.length > 0 && twitchStreams.length > 0}
    <div class="m-5 mx-auto w-auto max-w-screen-lg aspect-video rounded-lg">
        {#if canShowStream}
            <iframe 
            src="https://player.twitch.tv/?channel={showStream?.user_login}&parent={$page.url.hostname}" 
            frameborder="0" 
            title={showStream?.title}
            allowfullscreen={true} scrolling="no" height="100%" width="100%" />
        {:else}
            <iframe 
            src="https://player.twitch.tv/?channel={showUser?.login}&parent={$page.url.hostname}" 
            frameborder="0" 
            title={showUser?.description}
            allowfullscreen={true} scrolling="no" height="100%" width="100%" />
        {/if}
    </div>

    <div class="mx-auto flex justify-center">
        <TeamMini teamName={'本配信'} twitchUsers={twitchUsers['本配信']} {twitchStreams} on:click={changeShowStream}/>
    </div>

    <div class="mx-auto flex flex-wrap justify-center w-2/3">
    {#each teamNames as name}
        {#if name !== '本配信'}
            <TeamMini teamName={name} twitchUsers={twitchUsers[name]} {twitchStreams} on:click={changeShowStream}/>
        {/if}
    {/each}
    </div>
{:else}
    <Loading />
{/if}
