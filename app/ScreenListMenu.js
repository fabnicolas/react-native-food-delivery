import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import Header from './components/Header';

class ScreenListMenu extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Header style={styles.header}/>
          <View style={styles.content}/>
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