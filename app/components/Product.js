import React, {Component} from 'react';
import {Dimensions, TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

class Product extends Component {
    render() {
      return (
          <View style={[styles.container, this.props.style]}>
            <TouchableOpacity>
                <Image style={{height: 200, width: null}} source={require('../images/flat1.jpg')}/>
                <View style={{padding: '3%', width: '130%'}}>
                    <Text style={{color: 'black'}}>{this.props.name}</Text>
                    <Text style={{fontSize: 12}}>{this.props.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%'}}>
                        <Text style={{color:'#FF8C00'}}>{this.props.price+" €"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          </View>
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
    }
});

export default Product;