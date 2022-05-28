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
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <SearchBar />
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