import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

import {RNCamera} from 'react-native-camera';

import ImageAssets from '../../utils/ImageAssets';

class RNCameraExtended extends Component {
  constructor(props) {
    super(props);
    this.camera = undefined;

    let autofocus,
      flashmode,
      camera_type,
      captureinput_type,
      captureinput_image,
      permissionDialogTitle,
      permissionDialogMessage;

    let options = this.props.settings;

    if(options.autofocus) {
      if(options.autofocus == "on") autofocus = RNCamera.Constants.AutoFocus.on;
      else autofocus = RNCamera.Constants.AutoFocus.off;
    }

    if(options.flash) {
      if(options.flash == "on") flashmode = RNCamera.Constants.FlashMode.on;
      else if(options.flash == "off") flashmode = RNCamera.Constants.FlashMode.off;
      else if(options.flash == "torch") flashmode = RNCamera.Constants.FlashMode.torch;
      else flashmode = RNCamera.Constants.FlashMode.auto;
    }

    if(options.camera_type) {
      if(options.camera_type == "front") camera_type = RNCamera.Constants.Type.front;
      else camera_type = RNCamera.Constants.Type.back;
    }

    if(options.captureinput_type) {
      captureinput_type = options.captureinput_type;
    }

    if(options.captureinput_image){
      captureinput_image = options.captureinput_image;
    }

    if(!options.permissionDialogTitle) permissionDialogTitle = 'Permission to use camera';
    if(!options.permissionDialogMessage) permissionDialogMessage = 'We need your permission to use your camera phone';

    this.state = {
      autofocus: autofocus,
      flashmode: flashmode,
      camera_type: camera_type,
      captureinput_type: captureinput_type,
      captureinput_image: captureinput_image,
      permissionDialogTitle: permissionDialogTitle,
      permissionDialogMessage: permissionDialogMessage
    }
  }

  takePicture = async function() {
    if(this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.props.onCapture(data);
    }
  };

  render() {
    let camera_content;

    if(this.props.children) {
      camera_content = this.props.children;
    } else {
      if(this.state.captureinput_type == "button") {
        camera_content = (<Text
          style={styles.captureinput_button}
          onPress={this.takePicture.bind(this)}>
          [CAPTURE]
          </Text>);
      } else if(this.state.captureinput_type == "shutter") {
        camera_content = (<Image
          style={styles.captureinput_shutter}
          source={this.state.captureinput_image || ImageAssets.camera_shutter}
        />);
      }
    }

    return (
      <View style={[styles.container, this.props.style]}>
        <RNCamera
          ref={(cam) => {this.camera = cam;}}
          type={RNCamera.Constants.Type.back}
          autoFocus={this.state.autofocus}
          flashMode={this.state.flashmode}
          type={this.state.camera_type}
          permissionDialogTitle={this.state.permissionDialogTitle}
          permissionDialogMessage={this.state.permissionDialogMessage}
          style={styles.preview}
          {...this.props.RNCameraOptions}
        >
          {camera_content}
        </RNCamera>
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
  captureinput_button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  captureinput_shutter: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.7
  }
});

export default RNCameraExtended;