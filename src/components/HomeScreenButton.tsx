import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * A custom home screen button.
 * 
 * @param text The text that is displayed in the button.
 * @param onPress Function that handles navigation when button is pressed.
 * @returns A custom home screen button.
 */
export default function HomeScreenButton({ text, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#3b82f6",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: "uppercase",
    textAlign: "center",
    width: 300 // Sets width so that the buttons are the same width and won't adjust to text size
  },
});