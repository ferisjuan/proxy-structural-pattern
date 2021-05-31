import { IVideo } from '../interfaces/Video.interface'
import { IThirdPartyYouToubeLib } from '../interfaces/ThirdPartyYouTubeLib.interface'
import { ThirdPartyYouToubeLib } from './ThirdPartyYouToubeLib.class'

export class CachedYouTube implements IThirdPartyYouToubeLib {
	private listCache: IVideo[] | null
	private videoCache: IVideo | null
	public needReset: boolean

	constructor(private service: ThirdPartyYouToubeLib) {
		this.listCache = null
		this.videoCache = null
		this.needReset = false
	}

	listVideos(): IVideo[] | null {
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
		return this.listCache?.some(video => video.id === id)
	}

	downloadVideo(id: string): void {
		if (!this.downloadExists(id) || this.needReset)
			this.service.downloadVideo(id)
	}
}
