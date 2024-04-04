<script lang="ts">
    import type { HibiscusCupTeamName } from '$lib/types/HibiscusCupTeamName.d';
	import { onMount } from 'svelte';
    import axios from 'redaxios';
	import type { TwitchStream, TwitchStreamResponse, TwitchUser, TwitchUserResponse } from '$lib/types/Twitch';
	import { HIBISCUS_CUP_STREAMERS } from '$lib/members';
	import TeamMini from '$lib/components/hibiscus-cup/TeamMini.svelte';
    
    /**
     * チーム名
     */
    const teamNames: HibiscusCupTeamName[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    /**
     * 配信者情報
     */
    let twitchUsers: {[key in HibiscusCupTeamName]: TwitchUser[]} = {'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': []};
    /**
     * 配信情報
     */
    let twitchStreams: TwitchStream[] = [];

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

    onMount(async ()  => {
        let users = await fetchUsers();
        for (const team of teamNames) {
            const teamStreamerIds = HIBISCUS_CUP_STREAMERS.
                filter(streamer => streamer.team === team).
                map(streamer => streamer.twitch_id);
            const teamStreamers = users.filter(user => teamStreamerIds.includes(user.id));
            twitchUsers[team] = teamStreamers;
        }

        let streams = await fetchStreams();
        twitchStreams = streams;
    })
</script>

{#if twitchUsers.A.length > 0 && twitchStreams.length > 0}
    <div class="mx-auto flex flex-wrap justify-center w-2/3">
        {#each teamNames as name}
            <TeamMini teamName={name} twitchUsers={twitchUsers[name]} {twitchStreams}/>
        {/each}
    </div>
{/if}
