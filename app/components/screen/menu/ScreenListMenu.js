import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../../general/Header';
import ListProducts from './ListProducts';
import ProductDialog from './ProductDialog';

import ImageAssets from '../../../utils/ImageAssets';

class ScreenListMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_dialog_visible: false,
      product: {
        name: null,
        image: null,
        description: null,
        price: null
      }
    };
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
          data={[
            {key: 'Misto fritto', desc: 'Piatto da gustare con gli amici in compagnia, con un mix di gusti e sapori che rende felici.', price: '2.80', image: ImageAssets.flat1},
            {key: 'Monster Burgher', desc: 'Come ingrassare in un pranzo.', price: '3.50', image: ImageAssets.flat2},
            {key: 'Piatto 3', desc: 'Piatto 3', price: '666', image: ImageAssets.flat3},
          ]}
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