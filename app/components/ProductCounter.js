	import React, {Component} from 'react';
  import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

  import CommonStyles from '../styles/common';

  class ProductCounter extends Component {
    constructor(props){
      super(props);
      this.state = {counter: 1}
    }

    decreaseCounter = ()=>{
      let amount=this.state.counter;
      if(amount>1) this.setState({counter: amount-1});
    }

    increaseCounter = ()=>{
      this.setState({counter: this.state.counter+1});
    }    

    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <TouchableOpacity style={styles.button} onPress={this.decreaseCounter}>
            <Text style={styles.button_text}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.counter}</Text>
          <TouchableOpacity style={styles.button} onPress={this.increaseCounter}>
            <Text style={styles.button_text}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'row'
    },
    button: CommonStyles.button,
    button_text: CommonStyles.button_text,
    text: {
      flex: 1,
      textAlign: 'center',
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    }
  });

  export default ProductCounter;