import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PopupDialog, {DialogTitle, SlideAnimation} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({slideFrom: 'bottom'});

class ProductDialog extends Component {
    render() {
      return (
        <GeneralDialog
          show={this.props.show}
          onDismissed={this.props.onDismissed}
          title={"Informazioni su: "+this.props.product_info.name}
          >
          <View style={styles.dialog_view}>
            <Text>{this.state.product_info.name}</Text>
            <Image style={styles.dialog_image} source={this.state.product_info.image}/>
            <Text style={styles.dialog_description}>{this.state.product_info.description}</Text>
            <Text>Prezzo: {this.state.product_info.price} €</Text>
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
});

export default ProductDialog;