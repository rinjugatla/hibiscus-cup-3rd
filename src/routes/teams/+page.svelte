<script lang="ts">
    import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
    import Team from '$lib/components/hibiscus-cup/Team.svelte';
	import { onMount } from 'svelte';
    import axios from 'redaxios';
	import type { TwitchUser, TwitchUserResponse } from '$lib/types/Twitch';
	import { HIBISCUS_CUP_STREAMERS } from '$lib/members';
    
    /**
     * チーム名
     */
    const teamNames: HibiscusCupTeamName[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    /**
     * 配信者情報
     */
    let twitchUsers: {[key in HibiscusCupTeamName]: TwitchUser[]} = {'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': []};

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

    onMount(async ()  => {
        let users = await fetchUsers();
        for (const team of teamNames) {
            const teamStreamerIds = HIBISCUS_CUP_STREAMERS.
                filter(streamer => streamer.team === team).
                map(streamer => streamer.twitch_id);
            const teamStreamers = users.filter(user => teamStreamerIds.includes(user.id));
            twitchUsers[team] = teamStreamers;
        }
    })
</script>

{#if twitchUsers.A.length > 0}
    {#each teamNames as name}
        <Team teamName={name} twitchUsers={twitchUsers[name]} />
    {/each}
{/if}
