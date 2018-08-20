import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Header extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>PizzApp</Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#d90315'
    },
    text: {
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default Header;