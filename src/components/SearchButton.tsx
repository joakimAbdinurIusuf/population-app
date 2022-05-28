import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchButton() {
  return (
    <TouchableOpacity>
        <View style={styles.button}>
            <Ionicons name="search-circle-outline" size={70}/>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});