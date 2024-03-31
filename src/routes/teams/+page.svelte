<script lang="ts">
    import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import Team from '$lib/components/hibiscus-cup/Team.svelte';
    
    const teamNames: HibiscusCupTeamName[] = ['A', 'B', 'C', 'D', 'E', 'F'];
</script>

<div class=" text-center">
    {#each teamNames as name}
        <Team teamName={name} />
    {/each}
</div>
