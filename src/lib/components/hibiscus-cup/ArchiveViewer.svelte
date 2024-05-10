<script lang="ts">
    import type { ITwitchVideoResponse, TwitchUser, ITwitchVideo } from "$lib/types/Twitch";
    import { page } from '$app/stores';
    import axios from 'redaxios';
	import { HIBISCUS_CUP_STREAMERS } from "$lib/members";
    import SwitchCusor from "$lib/components/hibiscus-cup/SwitchCusor.svelte";
    
    /**
     * アーカイブ表示対象のストリーマ
     */
    export let selectedStreamer: TwitchUser | null;
    /**
     * TwitchAPIで取得したアーカイブ情報
     */
    let archives: ITwitchVideo[] = [];
    /**
     * 表示中のアーカイブのインデックス
     */
    let currentIndex = 0;

    /**
     * 配信者のTwitch配信情報を取得
     */
    const fetchArchives = async() => {
        const streamer = HIBISCUS_CUP_STREAMERS.filter(streamer => streamer.twitch_id === selectedStreamer?.id)[0];
        const response = await axios.post<ITwitchVideoResponse>(
            '/api/twitch/videos',
            {archive_ids: streamer.archive_ids, digest_ids: streamer.digest_ids}
        );
        const videos = response.data.videos;
        return videos;
    }

    /**
     * Twitch配信情報を更新
     */
    const updateArchives = async () => {
        let validArchives = await fetchArchives();
        archives = validArchives;
    }

    $: {
        selectedStreamer;
        ( async () => await updateArchives() )()
    };
</script>

<div class="m-5">
    <div class="mx-auto w-auto max-w-screen-lg aspect-video">
        <div class="flex h-full w-full">
            <SwitchCusor mode="prev" bind:currentIndex bind:maxIndex={archives.length} />
            <div class="h-full w-full">
                {#if archives?.length > 0}
                    <iframe 
                    src="https://player.twitch.tv/?video={archives[currentIndex].id}&parent={$page.url.hostname}" 
                    frameborder="0" 
                    title={archives[0].title}
                    allowfullscreen={true} scrolling="no" height="100%" width="100%" />
                {/if}
            </div>
            <SwitchCusor mode="next" bind:currentIndex bind:maxIndex={archives.length}/>
        </div>
    </div>
</div>