import { PRIVATE_CLIENT_ID, PRIVATE_CLIENT_SECRET } from '$env/static/private';
import { TwitchApi, TwitchApiSetting } from  '$lib/server/twitch';
import { twitchApi } from '$lib/store.server';

// TwitchAPI初期化
twitchApi.subscribe((value) => {
	if (!value) {
		const twitchSetting = new TwitchApiSetting(PRIVATE_CLIENT_ID, PRIVATE_CLIENT_SECRET);
		twitchApi.set(new TwitchApi(twitchSetting));
	}
});
