import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SearchByCountryScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY COUNTRY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    }
});