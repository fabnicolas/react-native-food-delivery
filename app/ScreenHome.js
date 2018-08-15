import React, {Component} from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';

import LandingPageText from './components/LandingPageText';

class ScreenHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.content} source={require('./images/sample.jpg')}>
        <LandingPageText/>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {flex: 1},
    content: {flex: 1, height: null, width: null}
  });

export default ScreenHome;