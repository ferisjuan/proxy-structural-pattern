// The interface of a remote service.
export interface IThirdPartyYouToubeLib {
	listVideos(): void
	getVideoInfo(id: string): void
	downloadVideo(id: string): void
}
