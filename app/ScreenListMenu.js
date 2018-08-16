import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import Header from './components/Header';
import ListProducts from './components/ListProducts';
import ImageAssets from './utils/ImageAssets';
import GeneralDialog from './components/GeneralDialog';

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
          <GeneralDialog
            show={this.state.show_dialog}
            onDismissed={this.closeDialog}
            title={"Informazioni su: "+this.state.product_info.name}
            >
            <View style={styles.dialog_view}>
              <Text>{this.state.product_info.name}</Text>
              <Image style={styles.dialog_image} source={this.state.product_info.image}/>
              <Text style={styles.dialog_description}>{this.state.product_info.description}</Text>
              <Text>Prezzo: {this.state.product_info.price} €</Text>
            </View>
          </GeneralDialog>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex: 1},
    content: {flex: 8},
    dialog_view: {flexDirection: 'column', alignItems: 'center'},
    dialog_image: {height: 150, width: 300},
    dialog_description: {width: 300}
});

export default ScreenListMenu;