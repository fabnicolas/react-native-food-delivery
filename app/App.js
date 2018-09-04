import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Toast from 'react-native-easy-toast';

import SplashScreen from 'react-native-splash-screen';

import {createCustomBottomTabNavigator} from './components/navigator/BottomTabNavigator';

import ScreenHome from './components/screen/home/ScreenHome';
import ScreenListMenu from './components/screen/menu/ScreenListMenu';
import ScreenCart from './components/screen/cart/ScreenCart';
import ScreenCamera from './components/screen/camera/ScreenCamera';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartListUpdateFlag: false
    }
  }

  appManager = () => {
    let onAddToCart = (product, amount) => {
      let cart = Object.assign([], this.state.cart);
      cart.push({
        key: product.name,
        image: product.image,
        price: product.price,
        quantity: amount
      });
      console.log("cart=" + JSON.stringify(cart));
      this.setState({
        cart: cart,
        cartListUpdateFlag: !this.state.cartListUpdateFlag
      }, () => {
        this.refs.toast.show('Prodotto aggiunto al carrello!', 2000);
      });
    }

    return {
      ...this.state,
      onAddToCart
    }
  }
  componentDidMount() {SplashScreen.hide();}
  render() {
    return (
      <View style={{flex: 1}}>
        <StackedApp screenProps={this.appManager()} />
        <Toast ref="toast" />
      </View>
    );
  }
}

const StackedApp = createStackNavigator({
  Home: {screen: props => <TabbedApp screenProps={props.screenProps} />}
})

let TabbedApp = createCustomBottomTabNavigator([
  {name: "Home", component: ScreenHome, icon: require('./images/nav_button_home.png')},
  {name: "Menu", component: ScreenListMenu, icon: require('./images/nav_button_menu.png')},
  {name: "Cart", component: ScreenCart, icon: require('./images/nav_button_orders.png')},
  {name: "Photocamera", component: ScreenCamera, icon: require('./images/nav_button_orders.png')},
]);



export default App;