import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ImageContent extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '6%',
    paddingRight: '30%'
  }
})

