import { IVideo } from './IVideo'

// The interface of a remote service.
export interface IThirdPartyYouToubeLib {
	listVideos(): IVideo[]
	getVideoInfo(id: string): IVideo | null
	downloadVideo(id: string): void
}
