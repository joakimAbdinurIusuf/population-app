import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SearchButton from './SearchButton';

/**
 * 
 */
 export default function SearchBar() {
    return (
        <View>
            <TextInput style={styles.background} placeholder="Enter a city" />
            <SearchButton />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
      background: {
          backgroundColor: "#F0EEEE",
          fontSize: 20,
          height: 50,
          borderRadius: 5,
          marginBottom: 10,
          marginLeft: 30,
          marginRight: 30,
          textAlign: 'center',
          borderColor: "black",
          borderWidth: 1
      }
  });