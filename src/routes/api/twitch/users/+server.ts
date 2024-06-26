import { twitchApi } from "$lib/store.server";
import { json } from "@sveltejs/kit";
import { get } from "svelte/store";

export async function POST({ request }): Promise<Response> {
    const isSelfRequest = request.headers.get('sec-fetch-site') === 'same-origin';
    if (!isSelfRequest){ return json(new Response()); }

    const api = get(twitchApi);

    const { names } = await request.json();
    const response = await api.getUser(names);
    return json(response);
}