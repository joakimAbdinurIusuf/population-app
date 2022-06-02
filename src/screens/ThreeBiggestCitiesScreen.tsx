import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThreeBiggestCitiesButton from '../components/ThreeBiggestCitiesButton';
import { CityData } from '../types/GeoNamesData';

/**
 * 
 * @param props 
 * @returns 
 */
export default function ThreeBiggestCitiesScreen({navigation}: any) {
    const countryName: CityData = navigation.getParam("countryName");
    const name1: CityData = navigation.getParam("name1");
    const population1: CityData = navigation.getParam("population1");
    const name2: CityData = navigation.getParam("name2");
    const population2: CityData = navigation.getParam("population2");
    const name3: CityData = navigation.getParam("name3");
    const population3: CityData = navigation.getParam("population3");
    return(
        <View>
            <Text style={styles.title}>{countryName}</Text> 
            <ThreeBiggestCitiesButton 
                text={name1} 
                onPress={() => navigation.replace("Results", {name: name1, population: population1})}
            />
            <ThreeBiggestCitiesButton 
                text={name2} 
                onPress={() => navigation.replace("Results", {name: name2, population: population2})}
            />
            <ThreeBiggestCitiesButton 
                text={name3} 
                onPress={() => navigation.replace("Results", {name: name3, population: population3})}
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