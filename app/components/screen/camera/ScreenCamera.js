import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import RNCameraExtended from '../../library/RNCameraExtended';

import ImageAssets from '../../../utils/ImageAssets';

class ScreenCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {imagePath: ""}
  }

  onCapture=(data)=>{
    console.log("data.uri="+data.uri)
    this.setState({imagePath: data.uri})
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <RNCameraExtended
          settings={{autofocus: "off", flash: "on", camera_type: "front", captureinput_type: "shutter"}}
          onCapture={this.onCapture}
        />
        <Image source={{uri: this.state.imagePath}} style={styles.preview} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default ScreenCamera;