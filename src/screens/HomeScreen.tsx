import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenButton from '../components/HomeScreenButton';

/**
 * The home screen. The user can navigate to the SearchByCity and SearchByCountry 
 * screen from here.
 * 
 * @returns The home screen.
 */
export default function HomeScreen(props: any) {
    return(
        <View>
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

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 90,
        textAlign: "center",
    },
});