import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {Image} from 'react-native';

const tabBarIconizer = (image) => ({focused, tintColor}) => {
  return <Image source={image} style={{tintColor: tintColor}} />
};

let createCustomBottomTabNavigator = (screens) => {
  let screens_inside_navigator = {};

  screens.map((screen_data) => {
    screens_inside_navigator[screen_data.name] = {
      screen: screen_data.component,
      navigationOptions: {tabBarIcon: tabBarIconizer(screen_data.icon)}
    };
  });

  let navigator = createMaterialTopTabNavigator(
    screens_inside_navigator,
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
        tabStyle: {padding: 0, margin: 0},
        indicatorStyle: {height: 1},
      },
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true
    }
  );

  return navigator;
};

export {createCustomBottomTabNavigator, tabBarIconizer}