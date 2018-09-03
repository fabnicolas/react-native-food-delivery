import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

import {RNCamera} from 'react-native-camera';

class ScreenCamera extends Component {
  constructor(props) {
    super(props);
    this.camera = undefined;
    this.state = {imagePath: ""}
  }

  onBarCodeRead(e) {
    console.log(
      "Barcode Found!",
      "Type: " + e.type + "\nData: " + e.data
    );
  }


  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      this.setState({imagePath: data.uri})
    }
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <RNCamera ref={(cam) => {
            this.camera = cam;
          }}
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </RNCamera>
        <Image source={{ uri: this.state.imagePath }} style={styles.preview}/>
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default ScreenCamera;