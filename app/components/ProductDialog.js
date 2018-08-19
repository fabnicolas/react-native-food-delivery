import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

import GeneralDialog from './GeneralDialog';
import ProductCounter from './ProductCounter';

import CommonStyles from '../styles/common';

class ProductDialog extends Component {
    render() {
      return (
        <GeneralDialog
          show={this.props.show}
          onDismissed={this.props.onDismissed}
          title={"Informazioni su: "+this.props.product_info.name}
          >
          <View style={styles.view_product_info}>
            <Text>{this.props.product_info.name}</Text>
            <Image style={styles.image} source={this.props.product_info.image}/>
            <Text style={styles.description}>{this.props.product_info.description}</Text>
            
            <View style={styles.form}>
              <ProductCounter></ProductCounter>
              <Text>Prezzo: {this.props.product_info.price} €</Text>
              <TouchableOpacity style={styles.button_addtocart} onPress={this.props.onAddToCart}>
                <Text style={styles.button_addtocart_text}>Aggiungi al carrello</Text>
              </TouchableOpacity>
            </View>
          </View>
        </GeneralDialog>
      );
    }
}

const styles = StyleSheet.create({
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_product_info: {flexDirection: 'column', alignItems: 'center'},
    image: {height: 150, width: 300},
    description: {width: 300},
    form: {height: 20, flexDirection: 'row'},
    button_addtocart: CommonStyles.button,
    button_addtocart_text: CommonStyles.button_text,
});

export default ProductDialog;