import React, {Component} from 'react';
import {TouchableOpacity, FlatList, Text, View, StyleSheet} from 'react-native';

import Header from '../../general/Header';
import CartProduct from './CartProduct';

import CommonStyles from '../../../styles/common';

class ScreenCart extends Component {
  onEmptyList = () => {
    if(this.props.screenProps.cart.length != 0) return null;
    return (<Text>Test</Text>);
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
            style={styles.content}
            ListFooterComponent={this.onEmptyList}
          />
        </View>
        <TouchableOpacity style={styles.button_buy}>
          <Text style={styles.button_addtocart_text}>Aggiungi al carrello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#00ff00'},
  content: {flex: 11},
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
  }
});

export default ScreenCart;