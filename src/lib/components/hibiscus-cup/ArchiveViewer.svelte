<script lang="ts">
    import type { TwitchUser, ITwitchVideo } from "$lib/types/Twitch";
    import { page } from '$app/stores';
    import SwitchCusor from "$lib/components/hibiscus-cup/SwitchCusor.svelte";
    
    /**
     * アーカイブ表示対象のストリーマ
     */
    export let selectedStream: { 
        streamer: TwitchUser | null,  
        archives: ITwitchVideo[]
    };

    /**
     * 表示中のアーカイブのインデックス
     */
    let currentIndex = 0;
    /**
     * ストリーマーが更新された際にインデックスをリセット
    */
    $: {
        selectedStream;
        resetIndex();
    }
    const resetIndex = () => { currentIndex = 0; }
    $: maxIndex = selectedStream.archives.length;
</script>

<div class="m-5">
    <div class="mx-auto w-auto max-w-screen-lg aspect-video">
        <div class="flex h-full w-full">
            <SwitchCusor mode="prev" bind:currentIndex bind:maxIndex />
            <div class="h-full w-full">
                {#if selectedStream.archives.length > 0}
                    <iframe 
                    src="https://player.twitch.tv/?video={selectedStream.archives[currentIndex].id}&parent={$page.url.hostname}" 
                    frameborder="0" 
                    title={selectedStream?.archives[0].title}
                    allowfullscreen={true} scrolling="no" height="100%" width="100%" />
                {/if}
            </div>
            <SwitchCusor mode="next" bind:currentIndex bind:maxIndex />
        </div>
    </div>
</div>