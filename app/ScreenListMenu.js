import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import ListProducts from './components/ListProducts';
import ImageAssets from './utils/ImageAssets';
import ProductDialog from './components/ProductDialog';

class ScreenListMenu extends Component {
    constructor(props){
      super(props);
      this.state = {
        show_dialog: false,
        product_info: {
          name: null,
          image: null,
          description: null,
          price: null
        }
      };
    }

    showDialog = (product_info)=>{
      this.setState({
        show_dialog: !this.state.show_dialog,
        product_info: product_info
      });
    }

    closeDialog = ()=>{this.setState({show_dialog: false})}

    onAddToCart = ()=>{
      // Temporary
      this.setState({show_dialog: false})
    }

    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <Header style={styles.header}/>
          <ListProducts
          data={[
            {key: 'Misto fritto', desc: 'Piatto da gustare con gli amici in compagnia, con un mix di gusti e sapori che rende felici.', price: '2.80', image: ImageAssets.flat1},
            {key: 'Monster Burgher', desc: 'Come ingrassare in un pranzo.', price: '3.50', image: ImageAssets.flat2},
            {key: 'Piatto 3', desc: 'Piatto 3', price: '666', image: ImageAssets.flat3},
          ]}
          onProductSelection={this.showDialog}
          style={styles.content}/>
          <ProductDialog
            show={this.state.show_dialog}
            onDismissed={this.closeDialog}
            onAddToCart={this.onAddToCart}
            product_info={this.state.product_info}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex: 1},
    content: {flex: 8},
});

export default ScreenListMenu;