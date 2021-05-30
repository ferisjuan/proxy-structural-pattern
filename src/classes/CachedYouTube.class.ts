import { IVideo } from '../interfaces/IVideo'
import { IThirdPartyYouToubeLib } from '../interfaces/ThirdPartyYouTubeLib.interface'
import { ThirdPartyYouToubeLib } from './ThirdPartyYouToubeLib.class'

export class CachedYouTube implements IThirdPartyYouToubeLib {
	private listCache: IVideo[]
	private videoCache: IVideo | null
	public needReset: boolean

	constructor(private service: ThirdPartyYouToubeLib) {
		this.listCache = []
		this.videoCache = null
		this.needReset = true
	}

	listVideos(): IVideo[] {
		if (this.listCache === null || this.needReset)
			this.listCache = this.service.listVideos()

		return this.listCache
	}

	getVideoInfo(id: string): IVideo | null {
		if (this.listCache === null || this.needReset)
			this.videoCache = this.service.getVideoInfo(id)
		return this.videoCache
	}

	downloadExists(id: string) {
		return this.listCache.some(video => video.id === id)
	}

	downloadVideo(id: string): void {
		if (!this.downloadExists(id) || this.needReset)
			this.service.downloadVideo(id)
	}
}
