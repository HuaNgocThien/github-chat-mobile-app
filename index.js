/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import WelcomScreen from './src/screens/WelcomeScreen/WelcomeScreen';

AppRegistry.registerComponent(appName, () => WelcomScreen);
