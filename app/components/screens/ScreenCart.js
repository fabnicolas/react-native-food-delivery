import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

import Header from '../headers/Header';
import CartProduct from '../cart/CartProduct';

class ScreenCart extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>Carrello</Header>
        <View style={styles.content}>
          <FlatList
            data={this.props.screenProps.cart}
            extraData={this.props.screenProps.toggleUpdate}
            renderItem={({item}) => {
              return <CartProduct
                name={item.key}
                quantity={item.quantity}
                thumbnail={item.thumbnail}
              />
            }}
            style={styles.content}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#00ff00'},
  content: {flex: 11},
});

export default ScreenCart;