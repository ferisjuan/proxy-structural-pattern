import { ThirdPartyYouToubeLib } from './ThirdPartyYouToubeLib.class'

export class YouTubeManager {
	protected service: ThirdPartyYouToubeLib

	constructor(service: ThirdPartyYouToubeLib) {
		this.service = service
	}

	renderVideoPage(id: string): void {
		const video = this.service.getVideoInfo(id)
		console.log(`Title ${video?.title}, description ${video?.description}`)
	}

	renderListPanel(): void {
		console.log(this.service.listVideos)
	}

	reactOnUserInput(id: string) {
		this.renderVideoPage(id)
		this.renderListPanel
	}
}
