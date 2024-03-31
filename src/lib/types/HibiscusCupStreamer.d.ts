import type { HibiscusCupTeamName } from "./HibiscusCupTeamName";

export type HibiscusCupStreamer = {
    team: HibiscusCupTeamName,
    name: string;
    twitch: string;
    twitch_id: string;
    twitter: string;
    video_id: string[];
}