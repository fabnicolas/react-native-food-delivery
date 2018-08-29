import React, {Component} from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import ScreenHome from './components/screens/ScreenHome';
import ScreenListMenu from './components/screens/ScreenListMenu';
import ScreenCart from './components/screens/ScreenCart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [
        {key: 'Sabrina', quantity: 2},
        {key: 'Volpe', quantity: 999},
        {key: 'Fabio', quantity: 4}
      ],
      cartListUpdateFlag: false
    }
  }

  makeScreenProps=()=>{
    let onAddToCart = (product, amount)=>{
      let cart = this.state.cart;
      cart.push({key: product.name, quantity: amount})
      this.setState({
        cart: cart,
        cartListUpdateFlag: !this.state.cartListUpdateFlag
      });
    }
    return {
      ...this.state,
      onAddToCart
    }
  }

  render() {return (<TabbedApp screenProps={this.makeScreenProps()}/>);}
}

const tabBarIconizer=(image) => ({focused, tintColor}) => {
  return <Image source={image} style={{tintColor:tintColor}}/>
}

const TabbedApp = createMaterialTopTabNavigator({
  Home: {
    screen: ScreenHome,
    navigationOptions:{tabBarIcon: tabBarIconizer(require('./images/nav_button_home.png'))}
  },
  Menu: {
    screen: ScreenListMenu,
    navigationOptions:{tabBarIcon: tabBarIconizer(require('./images/nav_button_menu.png'))}
  },
  Cart: {
    screen: ScreenCart,
    navigationOptions:{tabBarIcon: tabBarIconizer(require('./images/nav_button_orders.png'))}
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
});

export default App;