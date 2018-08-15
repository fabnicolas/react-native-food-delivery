import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Header from './components/Header';
import ScreenListMenu from './ScreenListMenu';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.content} source={require('./images/sample.jpg')}/>
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