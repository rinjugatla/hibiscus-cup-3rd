import { twitchApi } from "$lib/store.server";
import { json } from "@sveltejs/kit";
import { get } from "svelte/store";

export async function POST({ request }): Promise<Response> {
    const isSelfRequest = request.headers.get('sec-fetch-site') === 'same-origin';
    if (!isSelfRequest){ return json(new Response()); }

    const api = get(twitchApi);

    const { archive_ids, digest_ids } = await request.json();
    const ids = [...archive_ids, ...digest_ids];
    const response = await api.getVideos(ids);
    return json(response);
}