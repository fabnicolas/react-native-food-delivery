import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import CommonStyles from '../../styles/common';

class AmountCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: this.props.initialValue || 1}
  }

  decreaseCounter = () => {
    let amount = this.state.counter;
    if(amount > 1){
      amount-=1;
      this.setState({counter: amount}, ()=>{
        this.onCounterChange(amount);
      });
    }
  }

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1}, ()=>{
      this.onCounterChange(this.state.counter);
    });
  }

  onCounterChange = (counter) => {
    if(this.props.onChange) this.props.onChange(counter);
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
    flex: 0,
    flexDirection: 'row'
  },
  button: {
    ...CommonStyles.button, ...{
      flex: 1,
      flexBasis: 15,
    }
  },
  button_text: CommonStyles.button_text,
  text: {
    flex: 1,
    flexBasis: 15,
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});

export default AmountCounter;