import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY CITY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 100,
    }
});