import { writable } from "svelte/store";
import type { TwitchApi } from "$lib/server/twitch";

export const twitchApi = writable<TwitchApi>();