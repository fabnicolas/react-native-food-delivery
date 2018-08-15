import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LandingPageText extends Component{
    render(){
        return(
           <View style={styles.viewContainer}>
            <Text style={styles.mainText1}> 
                Benvenuto in
            </Text>
            <Text style={styles.mainText2}> 
                PizzApp!
            </Text>
            <Text style={styles.subText}> 
                La tua pizzeria di fiducia.
            </Text>
            <Text style={styles.description}>
                Serviamo di tutto per i nostri gentili clienti, tranne la pizza all'ananas. Se entrate per chiedere la 'pineapple pizza', non assicuriamo la vostra incolumità.
            </Text>
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
    },
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
    description:{
        color: 'white',
        fontSize: 11
    }
})

