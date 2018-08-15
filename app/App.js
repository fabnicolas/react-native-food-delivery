import React, {Component} from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import ScreenListMenu from './ScreenListMenu';
import LandingPageText from './components/LandingPageText';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.content} source={require('./images/sample.jpg')}>
        <LandingPageText/>
        </ImageBackground>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: {
      screen: App,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor}) => {
          return <Image source={require('./images/nav_button_home.png')} style={{tintColor:tintColor}}/>
        }
      }
    },
    Menu: {
      screen: ScreenListMenu,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor}) => {
          return <Image source={require('./images/nav_button_orders.png')} style={{tintColor:tintColor}}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
    }
  }
);

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, height: null, width: null}
});