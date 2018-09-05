import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../../general/Header';
import ListProducts from './ListProducts';
import ProductDialog from './ProductDialog';

class ScreenListMenu extends Component {
  fetchProducts = (callback=undefined) => {
    return fetch('https://finalgalaxy.altervista.org/applications/pizzapp_backend/product_list.php')
      .then(response => response.json())
      .then(responseJson => {if(callback) callback(responseJson)})
      .catch((error) => console.error(error));
  }

  constructor(props) {
    super(props);
    this.state = {
      is_dialog_visible: false,
      product: {
        name: null,
        image: null,
        description: null,
        price: null
      },
      available_products: []
    };

    this.fetchProducts((products) => {
      this.setState({
        is_dialog_visible: this.state.is_dialog_visible,
        product: this.state.product,
        available_products: products
      });
    })
  }
  

  showDialog = (product) => {
    this.setState({
      is_dialog_visible: !this.state.is_dialog_visible,
      product: product
    });
  }

  closeDialog = () => {this.setState({is_dialog_visible: false})}

  onAddToCart = (counter) => {
    this.props.screenProps.onAddToCart(this.state.product, counter);
    this.setState({is_dialog_visible: false});
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>PizzApp</Header>
        <ListProducts
          data={this.state.available_products}
          onProductSelection={this.showDialog}
          style={styles.content} />
        <ProductDialog
          show={this.state.is_dialog_visible}
          onDismissed={this.closeDialog}
          onAddToCart={this.onAddToCart}
          product={this.state.product}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#d90315'},
  content: {flex: 11},
});

export default ScreenListMenu;