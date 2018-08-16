import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import Product from './Product';

class ListProducts extends Component {
    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => {
                return <Product
                    name={item.key}
                    description={item.desc}
                    price={item.price}
                    image={item.image}
                />
            }}
            style={styles.content}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {flex: 1}
});

export default ListProducts;