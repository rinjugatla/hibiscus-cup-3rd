<script lang="ts">
	import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { HIBISCUS_CUP_TEAMS, HIBISCUS_CUP_STREAMERS } from '$lib/members';
	
	import type { TwitchUser } from '$lib/types/Twitch';
	import { XCompanySolid } from 'flowbite-svelte-icons';
	import TwitterLinkIcon from '$lib/components/link-icon/TwitterLinkIcon.svelte';
	import TwitchLinkIcon from '$lib/components/link-icon/TwitchLinkIcon.svelte';
	
	export let teamName: HibiscusCupTeamName;
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
	

	$: teamInfo = HIBISCUS_CUP_TEAMS.filter(info => info.team === teamName)[0];

	/**
	 * Twitch IDからTwitter IDを特定
	 * @param twitchId
	 */
	const twitterId = (twitchId: string) => {
		const infos = HIBISCUS_CUP_STREAMERS.filter(streamer => streamer.twitch_id === twitchId);

		const info = infos[0];
		const twitterId = info.twitter;
		return twitterId;
	}
</script>

<div class="mx-auto my-5 sm:w-1/2">
	<div class="bg-white rounded-lg bg-opacity-60 p-5">
		<span class="font-bold text-3xl text-hibiscus_cup_team_name text-shadow">team {teamName}</span>
		<div class="flex justify-center">
			{#each orderdTwitchUsers as member}
			<div class="m-2">
				<img class="rounded-full" src="{member.profile_image_url}" alt="{member.display_name}">
				<div class="my-2 text-center font-bold sm:text-lg text-hibiscus_cup_streamer_name">
					{member.display_name}
				</div>
				<div class="flex justify-center sm:gap-10">
					<TwitchLinkIcon name={member.login} />
					<TwitterLinkIcon name={twitterId(member.id)}/>	
				</div>
			</div>
			{/each}
		</div>
		<div class="text-xs sm:text-sm m-2">
			<div>
				{@html teamInfo?.description.replace('\n', '<br />')}
			</div>
			<div class="float-right">
				<a href="{teamInfo?.twitter_link}"  target="_blank" rel="noopener noreferrer">
					<div class="flex items-center">
						<XCompanySolid size="xs" />
						<div>
							出典
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
.text-shadow {
	text-shadow: 2px 2px 3px darkgrey;
}
</style>