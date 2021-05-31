import { IVideo } from './Video.interface'

// The interface of a remote service.
export interface IThirdPartyYouToubeLib {
	listVideos(): IVideo[] | null
	getVideoInfo(id: string): IVideo | null
	downloadVideo(id: string): void
}
