<script lang="ts">
	import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { HIBISCUS_CUP_TEAMS, HIBISCUS_CUP_STREAMERS } from '$lib/members';
	import type { TwitchStream, TwitchUser } from '$lib/types/Twitch';
	import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
	
    /**
     * チーム名
     */
	export let teamName: HibiscusCupTeamName;
    /**
     * Twtichユーザ情報
     */
	export let twitchUsers: TwitchUser[];
    /**
     * 配信情報
     */
    export let twitchStreams: TwitchStream[];

    /**
     * 配信マルチ視聴サービス
     */
    const multistreUrlPrefix = 'https://multistre.am/';
    /**
     * チーム配信のマルチ視聴リンク
     */
    $: multistreLink = multistreUrlPrefix + twitchUsers.map(user => `${user.login}`).join('/');

	/**
	 * 順序を保証したTwitchUser情報
	 */
	let orderdTwitchUsers: TwitchUser[];
	/**
	 * APIの問い合わせ状況によってユーザ情報の順序が一定ではないので、並び替え
	*/
	$: {
		const members = HIBISCUS_CUP_STREAMERS.filter(streamer => streamer.team === teamName);
		const orderd: TwitchUser[] = [];
		for (const member of members) {
			const twitchUser = twitchUsers.filter(user => user.id === member.twitch_id)[0];
			orderd.push(twitchUser);
		}
		orderdTwitchUsers = orderd;
	}
</script>

<div class="m-3">
    <div class=" bg-white rounded-lg bg-opacity-60 p-3 size-fit">
        <span class="font-bold text-3xl text-hibiscus_cup_team_name text-shadow">
            {teamName === '本配信' ? '' : 'team'} {teamName}
        </span>
        <div class="flex justify-center min-w-[264px]">
            {#each orderdTwitchUsers as member}
            {@const stream = twitchStreams?.filter(stream => stream.type ==="live" && stream.user_id === member.id)}
            {@const liveNow = stream.length > 0}
                <div 
                class="m-2 p-1 rounded-full"
                class:live-circle={liveNow}
                >
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img 
                        on:click={() =>dispatch('click', { streamer: member, stream: liveNow ? stream[0] : null }) }    
                        class="rounded-full h-16 w-16 hover:cursor-pointer"
                        src={member.profile_image_url}
                        alt={member.display_name}
                        title={member.display_name}
                        >
                </div>
            {/each}
        </div>
        <a 
        class:invisible={teamName === '本配信'}
        href={multistreLink} target="_blank" rel="noopener noreferrer" >
            <div class="mt-2 text-xs text-right text-blue-600 hover:underline">欲張り3画面(外部サイト)</div>
        </a>
    </div>
</div>

<style>
    .live-circle {
        box-shadow: 0 0 5px 2px rgba(255, 0, 0, 1);
    }
</style>