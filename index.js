/** @format */

import {YellowBox, AppRegistry} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Method ']);
import App from './app/App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);

