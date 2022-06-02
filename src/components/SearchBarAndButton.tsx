import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

/**
 * A component that has a input field in which the user can search for a city or country, and a button
 * that, when pressed, fetches data from an api and navigates the user to a new screen.
 * 
 * @param prompt Text prompting the user to "Enter a city" or "Enter a country". 
 * @param searchTerm The city or country that the user searched for.
 * @param onTermChange Returns the search term passed from the search by city/country screen every time
 * the text changes. The search term state is set in the parent, we don't want the child to set a new state.
 * @param onCitySubmit Helps the search by city/country screen to call an api when the search button is pressed.
 * @returns 
 */
export default function SearchBarAndButton({ prompt, searchTerm, onTermChange, onCitySubmit }: any) {
    return ( 
        <View>
            <TextInput 
                style={styles.background} 
                placeholder={prompt} 
                value={searchTerm}
                onChangeText={onTermChange}
            />
            <TouchableOpacity
                onPress={onCitySubmit}
                style={styles.touchableOpacityDimensions}
            >
                <View style={styles.button}>
                    <Ionicons name="search-circle-outline" size={70}/>
                </View>
            </TouchableOpacity>
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
    },
    /* Touchableopacity takes up the whole screen horizontally, so cutting of size from
    its' left and right means the user has to press directly on the search button for it 
    to do anything (previously, they could press the white space around it). */
    touchableOpacityDimensions: {  
        marginLeft: 150,
        marginRight: 150,
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    },
});