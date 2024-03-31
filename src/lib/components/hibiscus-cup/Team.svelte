<script lang="ts">
	import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { HIBISCUS_CUP_STREAMERS } from '$lib/members';
	
	export let teamName: HibiscusCupTeamName;
	$: members = HIBISCUS_CUP_STREAMERS.filter(streamer => streamer.team === teamName);
</script>

<div class="m-10">
	{#each members as member}
	<div class="m-2">
		<a href="https://www.twitch.tv/{member.twitch}" target="_blank" rel="noopener noreferrer">{member.name}</a>
	</div>
	{/each}
</div>
