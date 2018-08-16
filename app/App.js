import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import ScreenHome from './ScreenHome';
import ScreenListMenu from './ScreenListMenu';

export default createMaterialTopTabNavigator(
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
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#F2F2F2',
        borderTopColor: 'grey',
        borderWidth: 0.1,
      },
      iconStyle: {width: 64, height: 46},
      tabStyle: {padding: 0, margin:0},
      indicatorStyle: {height: 1},
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true
  }
);