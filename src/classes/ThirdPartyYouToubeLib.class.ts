import { IVideo } from '../interfaces/Video.interface'
import { IThirdPartyYouToubeLib } from '../interfaces/ThirdPartyYouTubeLib.interface'

import { videoList } from '../data/video-list'

// The concrete implementation of a service connector. Methods
// of this class can request information from YouTube. The speed
// of the request depends on a user's internet connection as
// well as YouTube's. The application will slow down if a lot of
// requests are fired at the same time, even if they all request
// the same information.
export class ThirdPartyYouToubeLib implements IThirdPartyYouToubeLib {
	listVideos(): IVideo[] {
		return videoList
	}

	getVideoInfo(id: string): IVideo | null {
		const index = videoList.map((video: IVideo) => video.id).indexOf(id)
		return videoList[index]
	}

	downloadVideo(id: string): void {
		console.log(`downloading video with id: ${id}`)
	}
}
