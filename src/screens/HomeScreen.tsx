import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreenButton from '../components/HomeScreenButton';

/**
 * The home screen. The user can navigate to the SearchByCity and SearchByCountry 
 * screen from here.
 * 
 * @returns The home screen.
 */
export default function HomeScreen(props: any) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text> 
            <HomeScreenButton 
                text="SEARCH BY CITY"  
                onPress={() => props.navigation.navigate("SearchByCity")}
            />
            <HomeScreenButton 
                text="SEARCH BY COUNTRY"  
                onPress={() => props.navigation.navigate("SearchByCountry")}
            />
        </View>
    )
}

// TODO: Extract into a single component to reuse this on all screens?
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 100,
    },
});