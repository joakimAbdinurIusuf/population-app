import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

/**
 * 
 */
export default function SearchBar({ searchTerm, onTermChange, onCitySubmit }: any) {
    return ( // navigation.navigate("Results", {name: cityName, population: cityPopulation})
        <View>
            <TextInput 
                style={styles.background} 
                placeholder="Enter a city" 
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

  // export default withNavigation(SearchBar);