<script lang="ts">
	import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { HIBISCUS_CUP_STREAMERS } from '$lib/members';
	import type { TwitchUser } from '$lib/types/Twitch';
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
            {@const user = HIBISCUS_CUP_STREAMERS.filter(streamer => streamer.twitch_id === member.id)[0]}
            {@const hasArchive = user.archive_ids.length > 0 || user.digest_ids.length > 0}
                <div 
                class="m-2 p-1 rounded-full"
                >
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img 
                        on:click={() =>dispatch('click', { streamer: member }) }    
                        class="rounded-full h-16 w-16 hover:cursor-pointer"
                        src={member.profile_image_url}
                        alt={member.display_name}
                        title={member.display_name}
                        >
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .live-circle {
        box-shadow: 0 0 5px 2px rgba(255, 0, 0, 1);
    }
</style>