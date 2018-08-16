import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import ListProducts from './components/ListProducts';
import ImageAssets from './utils/ImageAssets';

class ScreenListMenu extends Component {
    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <Header style={styles.header}/>
          <ListProducts
          data={[
            {key: 'Piatto 1', desc: 'Piatto 1', price: '2.80', image: ImageAssets.flat1},
            {key: 'Piatto 2', desc: 'Piatto 2', price: '3.50', image: ImageAssets.flat2},
            {key: 'Piatto 3', desc: 'Piatto 3', price: '666', image: ImageAssets.flat3},
          ]}
          style={styles.content}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex: 1},
    content: {flex: 8}
});

export default ScreenListMenu;