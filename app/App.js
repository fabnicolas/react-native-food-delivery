import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Toast from 'react-native-easy-toast';

import ScreenHome from './components/screen/home/ScreenHome';
import ScreenListMenu from './components/screen/menu/ScreenListMenu';
import ScreenCart from './components/screen/cart/ScreenCart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [],
      cartListUpdateFlag: false
    }
  }

  makeScreenProps=()=>{
    let onAddToCart = (product, amount)=>{
      let cart = Object.assign([], this.state.cart);
      cart.push({
        key: product.name,
        image: product.image,
        price: product.price,
        quantity: amount
      });
      console.log("cart="+JSON.stringify(cart));
      this.setState({
        cart: cart,
        cartListUpdateFlag: !this.state.cartListUpdateFlag
      }, ()=>{
        this.refs.toast.show('Prodotto aggiunto al carrello!', 2000);
      });
    }
    return {
      ...this.state,
      onAddToCart
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TabbedApp screenProps={this.makeScreenProps()}/>
        <Toast ref="toast"/>
      </View>
      );
    }
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