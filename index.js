import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import TrackPlayer from 'react-native-track-player'
import PlaybackService from './src/services/playback'

AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => PlaybackService)
