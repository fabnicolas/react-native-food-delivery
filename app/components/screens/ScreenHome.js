import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import ImageContent from '../general/ImageContent';

class ScreenHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.content} source={require('../../images/sample.jpg')}>
          <ImageContent>
            <Text style={styles.mainText1}>
              Benvenuto in
            </Text>
            <Text style={styles.mainText2}>
              Pizza!
            </Text>
            <Text style={styles.subText}>
              La tua pizzeria di fiducia.
            </Text>
            <Text style={styles.description}>
              Serviamo di tutto per i nostri gentili clienti, tranne la pizza all'ananas. Se entrate per chiedere la 'pineapple pizza', non assicuriamo la vostra incolumità.
            </Text>
          </ImageContent>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, height: null, width: null },
  mainText1: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainText2: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  subText: {
    color: 'white',
    fontSize: 13,
    paddingBottom: 5
  },
  description: {
    color: 'white',
    fontSize: 11
  }
});

export default ScreenHome;