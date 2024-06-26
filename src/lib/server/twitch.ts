import type { ICanCreateClipPeriod, ITwitchClip, ITwitchClipAPIResponse, ITwitchClipResponse, TwitchTokenAPIResponse, TwitchUserAPIResponse, TwitchUserResponse, ITwitchVideo, ITwitchVideoAPIResponse, ITwitchVideoResponse, TwitchStreamResponse, TwitchStreamAPIResponse } from '$lib/types/Twitch.d';
import axios from 'redaxios';

export class TwitchApiSetting {
	private _ClientId: string;
	private _ClientSecret: string;

	/**
	 *
	 * @param id クライアントID
	 * @param secret 秘密鍵
	 */
	constructor(id: string, secret: string) {
		this._ClientId = id;
		this._ClientSecret = secret;
	}

	get ClientId(): string {
		return this._ClientId;
	}

	get ClientSecret(): string {
		return this._ClientSecret;
	}
}

class TwitchToken {
	private _AccessToken: string;
	private _ExpiresIn: number;
	private _TokenType: string;

	/**
	 *
	 * @param token トークン
	 * @param expires 期限
	 * @param tokenType トークンタイプ
	 */
	constructor(data: TwitchTokenAPIResponse) {
		this._AccessToken = data.access_token;
		this._ExpiresIn = data.expires_in;
		this._TokenType = data.token_type;
	}

	/**
	 * トークンが期限切れか
	 * @param prevGetTokenTime 前回のトークン取得時間
	 */
	isExpired(prevGetTokenTime: number): boolean {
		const notInit = prevGetTokenTime == 0;
		if (notInit) {
			return true;
		}

		const expired = Date.now() - prevGetTokenTime > this._ExpiresIn;
		return expired;
	}

	get token(): string {
		const param = `Bearer ${this._AccessToken}`;
		return param;
	}
}

export class TwitchApi {
	_Setting: TwitchApiSetting;
	_Token: TwitchToken | null;
	_PrevGetTokenTime: number;

	constructor(setting: TwitchApiSetting) {
		this._Setting = setting;
		this._Token = null;
		this._PrevGetTokenTime = 0;

		this.refreshToken();
	}

	private async refreshToken() {
		const needRefresh = this._Token == null || this._Token.isExpired(this._PrevGetTokenTime);
		if (!needRefresh) { return; }

		const url = 'https://id.twitch.tv/oauth2/token';
		const response = await axios.post<TwitchTokenAPIResponse>(url, {
			client_id: this._Setting.ClientId,
			client_secret: this._Setting.ClientSecret,
			grant_type: 'client_credentials'
		});
		this._Token = new TwitchToken(response.data);
		this._PrevGetTokenTime = Date.now();
		console.log('refreshed token.');
	}

	/**
	 * ユーザ情報を取得
	 * @param names Twtichユーザ名
	 */
	async getUser(names: [string]): Promise<TwitchUserResponse> {
		await this.refreshToken();
		const url = 'https://api.twitch.tv/helix/users';

		const userNameParams = this.createUserNameParams('login', names);
		const response = await axios.get<TwitchUserAPIResponse>(url, {
			headers: {
				Authorization: this._Token!.token,
				'Client-Id': this._Setting.ClientId
			},
			params: userNameParams
		});
		const users = {users: response.data.data};
		return users;
	}

	/**
	 * ユーザ名パラメータを作成
	 * redaxiosのparamsで同じパラメータ名(login=1&login=2)を使用するとURLエンコードしてしまうので対策
	 * @param key パラメータキー(loginなど)
	 * @param names Twtichユーザ名
	 */
	private createUserNameParams(key: string, names: string[]): URLSearchParams {
		const params = new URLSearchParams();
		for (const name of names) {
			params.append(key, name);
		}
		return params;
	}

	/**
	 * クリップを取得
	 * @param id 
	 * @returns 
	 */
	async getClips(id: number): Promise<ITwitchClipResponse> {
		await this.refreshToken();

		const url = 'https://api.twitch.tv/helix/clips';
		const response = await axios.get<ITwitchClipAPIResponse>(url, {
			headers: {
				Authorization: this._Token!.token,
				'Client-Id': this._Setting.ClientId
			},
			params: {
				broadcaster_id: id
			}
		});
		const clips = {clips: response.data.data};
		return clips;
	}

	/**
	 * 配信IDに関連するクリップを取得
	 * @param broadcaster_id 配信者ID
	 * @param video_id 配信ID
	 */
	async getClipsWithVideoId(broadcaster_id: number, video_ids: string[]): Promise<ITwitchClipResponse> {
		this.refreshToken();

		if (video_ids.length === 0) { return { clips: [] }; }
		// ビデオ保存期間は配信開始から最大60日、クリップ取得の最終日を決めるためビデオ情報を先に取得する
		const videoResponse = await this.getVideos(video_ids);
		const createClipPeriod = this.calcCanCreateClipPeriod(videoResponse.videos);
		
		const url = 'https://api.twitch.tv/helix/clips';
		const maxLoopCount = 10;
		let clips: ITwitchClip[] = [];
		for (let i = 0; i < maxLoopCount; i++) {
			const response = await axios.get<ITwitchClipAPIResponse>(url, {
				headers: {
					Authorization: this._Token!.token,
					'Client-Id': this._Setting.ClientId
				},
				params: {
					broadcaster_id: broadcaster_id,
					started_at: createClipPeriod.start.toISOString(), // RFC3339書式
					ended_at: createClipPeriod.end.toISOString(),
					first: '100'
				}
			});
			clips = [...response.data.data]
			
			const existsMoreClips = response.data?.pagination != undefined;
			if (!existsMoreClips){ break; }
		}
		
		const targetVideoClips = clips.filter((clip) => video_ids.includes(clip.video_id));
		const result = { clips: targetVideoClips }
		return result;
	}

	/**
	 * クリック作成可能期間を計算
	 * @param videos ビデオ情報
	 */
	calcCanCreateClipPeriod(videos: ITwitchVideo[]): ICanCreateClipPeriod {
		const startAts = videos.map((video) => new Date(video.created_at)).sort()
		const startAt = startAts[0];
		const lastStartAt = new Date(startAts.slice(-1)[0].getTime());
		const createClipMaxDays = 60;
		lastStartAt.setDate(lastStartAt.getDate() + createClipMaxDays);

		const result = {
			start: startAt,
			end: lastStartAt
		}
		return result;
	}
	
	/**
	 * ビデオ情報を取得
	 * @param ids ビデオID
	 */
	async getVideos(ids: string[]): Promise<ITwitchVideoResponse> {
		await this.refreshToken();

		const url = 'https://api.twitch.tv/helix/videos';
		const idsParams = this.createVideoIdsParams(ids);
		try {
			const response = await axios.get<ITwitchVideoAPIResponse>(url, {
				headers: {
					Authorization: this._Token!.token,
					'Client-Id': this._Setting.ClientId
				},
				params: idsParams
			});
			const videos = {videos: response.data.data};
			return videos;
		} catch (error) {
			console.error(`getVideos error`, error);
			return {videos: []};
		}
	}

	private createVideoIdsParams(ids: string[]): URLSearchParams {
		const params = new URLSearchParams();
		for (const id of ids) {
			params.append('id', id);
		}
		return params;
	}

	/**
	 * 配信状況を取得
	 * 配信していないユーザについてはデータが取得されない
	 * @param names Twitchユーザ名
	 */
	async getStream(names: string[]): Promise<TwitchStreamResponse> {
		await this.refreshToken();
		const url = 'https://api.twitch.tv/helix/streams';

		const userNameParams = this.createUserNameParams('user_login', names);
		const response = await axios.get<TwitchStreamAPIResponse>(url, {
			headers: {
				Authorization: this._Token!.token,
				'Client-Id': this._Setting.ClientId
			},
			params: userNameParams
		});
		const streams = {streams: response.data.data};
		return streams;
	}
}
