import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * The results screen, which shows the name of a city and its' population.
 * 
 * @returns A results screen.
 */
export default function ResultsScreen() {
    return(
        <View>
            <Text style={styles.title}>NAME OF CITY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 90,
      textAlign: "center",
    }
});