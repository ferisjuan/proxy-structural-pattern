import { CachedYouTube } from './classes/CachedYouTube.class'
import { ThirdPartyYouToubeLib } from './classes/ThirdPartyYouToubeLib.class'
import { YouTubeManager } from './classes/YouTubeManager'

const aYouTubeService = new ThirdPartyYouToubeLib()
const aYoutubeProxy = new CachedYouTube(aYouTubeService)
const manager = new YouTubeManager(aYoutubeProxy)
manager.reactOnUserInput('1')
