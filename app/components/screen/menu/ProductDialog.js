import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

import GeneralDialog from '../../library/GeneralDialog';
import AmountCounter from '../../library/AmountCounter';

import CommonStyles from '../../../styles/common';

class ProductDialog extends Component {
  constructor(props){
    super(props);
    this.state = {counter: 1}
  }

  onCounterChange=(counter)=>{this.setState({counter: counter})}
  onAddToCart=()=>{this.props.onAddToCart(this.state.counter)}

  render() {
    return (
      <GeneralDialog
        show={this.props.show}
        onDismissed={this.props.onDismissed}
        title={"Informazioni su: " + this.props.product.name}
      >
        <View style={styles.view_product_info}>
          <Text>{this.props.product.name}</Text>
          <Image style={styles.image} source={this.props.product.image} />
          <Text style={styles.description}>{this.props.product.description}</Text>
          <View style={styles.form}>
            <AmountCounter style={styles.counter} onChange={this.onCounterChange} />
            <Text style={styles.price}>Prezzo: {this.props.product.price} €</Text>
          </View>
          <TouchableOpacity style={styles.button_addtocart} onPress={this.onAddToCart}>
            <Text style={styles.button_addtocart_text}>Aggiungi al carrello</Text>
          </TouchableOpacity>
        </View>
      </GeneralDialog>
    );
  }
}

const styles = StyleSheet.create({
  dialogContentView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  view_product_info: {flexDirection: 'column', alignItems: 'center'},
  image: {height: 150, width: 300},
  description: {width: 300},
  form: {height: 20, flexDirection: 'row'},
  counter: {width: 100},
  price: {paddingLeft: '3%'},
  button_addtocart: {...CommonStyles.button, ...{
    width: 300,
    marginTop: '3%',
    marginBottom: '3%'
  }},
  button_addtocart_text: {...CommonStyles.button_text, ...{
    paddingLeft: '3%',
    paddingRight: '3%'
  }}
});

export default ProductDialog;