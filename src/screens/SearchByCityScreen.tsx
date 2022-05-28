import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen() {
    return(
        <View>
            <SearchBar />
            <Text style={styles.title}>SEARCH BY CITY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 100,
      textAlign: "center",
    }
});

// style={styles.container}