	import React, {Component} from 'react';
  import {View, StyleSheet} from 'react-native';

  class CustomComponent extends Component {
    render() {
      return (
        <View style={[this.style.container, this.props.style]}>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {flex: 1},
  });

  export default CustomComponent;