import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import ScreenHome from './ScreenHome';
import ScreenListMenu from './ScreenListMenu';

export default createBottomTabNavigator(
  {
    Home: {
      screen: ScreenHome,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor}) => {
          return <Image
            source={require('./images/nav_button_home.png')}
            style={{tintColor:tintColor}}
          />
        }
      }
    },
    Menu: {
      screen: ScreenListMenu,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor}) => {
          return <Image
            source={require('./images/nav_button_orders.png')}
            style={{tintColor:tintColor}}
          />
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