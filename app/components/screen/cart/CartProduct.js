import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

import AmountCounter from '../../library/AmountCounter';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  _onProductSelection = () => {
    if(this.props.onProductSelection) this.props.onProductSelection({
      name: this.props.name,
      image: this.props.image,
      description: this.props.description,
      price: this.props.price
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this._onProductSelection}>
          <View style={styles.container_product}>
            <View style={styles.container_product_image}>
              <Image style={styles.image_product} source={this.props.image}></Image>
            </View>
            <View style={styles.container_product_data}>
              <Text style={styles.product_name}>{this.props.name}</Text>
              <View style={styles.container_product_data_quantity}>
                <Text style={styles.product_quantity}>Quantità: </Text>
                <AmountCounter initialValue={this.props.quantity}/>
              </View>
            <View style={styles.container_product_data_price}>
              <Text>Prezzo: </Text>
              <Text style={styles.product_price_content}>{this.props.price} €</Text>
            </View>
          </View>
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
  },
  image_product: {height: 100, width: null},
  container_product: {
    flex: 1,
    flexDirection: "row"
  },
  container_product_image: {flex: 1},
  container_product_data: {flex: 1, paddingLeft: '3%', paddingRight: '3%'},
  product_name: {color: 'black'},
  product_quantity: {fontSize: 15},
  container_product_data_price: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: '5%'
  },
  product_price_content: {color: '#FF8C00'}
});

export default Product;