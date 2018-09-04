import React, {Component} from 'react';
import {TouchableOpacity, FlatList, Text, View, StyleSheet} from 'react-native';

import Header from '../../general/Header';
import CartProduct from './CartProduct';

import CommonStyles from '../../../styles/common';

class ScreenCart extends Component {
  isListEmpty = () => {
    return (this.props.screenProps.cart.length == 0);
  }

  onEmptyList = () => {
    if(!this.isListEmpty()) return null;
    return (
      <View style={styles.content_empty}>
        <Text>Ops!</Text>
        <Text>Non ci sono elementi nel carrello.</Text>
      </View>
    );
  }

  onPurchase = () => {
    if(this.props.screenProps.onPurchase)
      this.props.screenProps.onPurchase();
  }

  render_button_buy = () => {
    if(this.isListEmpty()) return null;
    return (
      <TouchableOpacity style={styles.button_buy} onPress={this.onPurchase}>
        <Text style={styles.button_addtocart_text}>Ordina i prodotti selezionati</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>Carrello</Header>
        <View style={styles.content}>
          <FlatList
            data={this.props.screenProps.cart}
            extraData={this.props.screenProps.cartListUpdateFlag}
            renderItem={({item}) => {
              return <CartProduct
                name={item.key}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            }}
            contentContainerStyle={[{flexGrow: 1}, !this.isListEmpty() ? null : {justifyContent: 'center'}]}
            ListFooterComponent={this.onEmptyList}
          />
        </View>
        {this.render_button_buy()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#00ff00'},
  content: {flex: 11},
  content_empty: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button_buy: {
    ...CommonStyles.button, ...{
      flex: 0.5,
      alignItems: 'center',
      backgroundColor: 'blue'
    }
  },
  button_addtocart_text: {
    ...CommonStyles.button_text, ...{
      color: 'white'
    }
  },
});

export default ScreenCart;