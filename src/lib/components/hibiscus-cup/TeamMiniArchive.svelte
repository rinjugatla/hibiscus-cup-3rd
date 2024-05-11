<script lang="ts">
    import { Indicator } from 'flowbite-svelte';
	import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { HIBISCUS_CUP_STREAMERS } from '$lib/members';
	import type { ITwitchVideo, TwitchUser } from '$lib/types/Twitch';
	import { createEventDispatcher, onMount } from 'svelte';
    
    const dispatch = createEventDispatcher();
	
    /**
     * チーム名
     */
	export let teamName: HibiscusCupTeamName;
    /**
     * Twtichユーザ情報
     */
	export let twitchUsers:  {[key in HibiscusCupTeamName]: TwitchUser[]} = {'本配信': [], 'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': []};
    /**
     * アーカイブ,ダイジェスト情報
     */
    export let twitchArchives: ITwitchVideo[] = [];

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
			const twitchUser = twitchUsers[teamName].filter(user => user.id === member.twitch_id)[0];
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
                {@const validArchives = twitchArchives.filter(archive => archive.user_id === user.twitch_id)}
                {@const hasArchives = validArchives.length > 0}
                <div 
                class="m-2 p-1 rounded-full relative"
                >
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img 
                        on:click={() => { if(hasArchives){dispatch('click', { streamer: member, archives: validArchives })} }}
                        class="rounded-full h-16 w-16 hover:cursor-pointer"
                        src={member.profile_image_url}
                        alt={member.display_name}
                        title={member.display_name}
                        >
                    {#if hasArchives}
                    <Indicator color="green" border size="xl" placement="top-right" class="text-xs font-bold mr-2 mt-2">{validArchives.length}</Indicator>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
