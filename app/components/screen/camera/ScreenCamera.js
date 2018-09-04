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
          settings={{autofocus: "off", flash: "on", camera_type: "front"}}
          onCapture={this.onCapture}
        >
          <Image source={ImageAssets.camera_shutter} style={styles.camera_shutter}/>
        </RNCameraExtended>
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
  },
  camera_shutter: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.7
  }
});

export default ScreenCamera;