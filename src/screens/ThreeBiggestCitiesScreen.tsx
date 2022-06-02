import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThreeBiggestCitiesButton from '../components/ThreeBiggestCitiesButton';
import { CityData } from '../types/GeoNamesData';

/**
 * Shows the three biggest cities of the country the user searched for 
 * in the SearchByCountryScreen, ordered by size.
 * 
 * @returns A screen showing the three biggest cities.
 */
export default function ThreeBiggestCitiesScreen({navigation}: any) {
    const countryName: CityData = navigation.getParam("countryName");
    const nameOfBiggestCity: CityData = navigation.getParam("name1");
    const populationSizeOfBiggestCity: CityData = navigation.getParam("population1");
    const nameOfSecondBiggestCity: CityData = navigation.getParam("name2");
    const populationSizeOfSecondBiggestCity: CityData = navigation.getParam("population2");
    const nameOfThirdBiggestCity: CityData = navigation.getParam("name3");
    const populationSizeOfThirdBiggestCity: CityData = navigation.getParam("population3");
    return(
        <View>
            <Text style={styles.title}>{countryName}</Text> 
            <ThreeBiggestCitiesButton 
                text={nameOfBiggestCity} 
                onPress={() => navigation.replace("Results", {name: nameOfBiggestCity, population: populationSizeOfBiggestCity})}
            />
            <ThreeBiggestCitiesButton 
                text={nameOfSecondBiggestCity} 
                onPress={() => navigation.replace("Results", {name: nameOfSecondBiggestCity, population: populationSizeOfSecondBiggestCity})}
            />
            <ThreeBiggestCitiesButton 
                text={nameOfThirdBiggestCity} 
                onPress={() => navigation.replace("Results", {name: nameOfThirdBiggestCity, population: populationSizeOfThirdBiggestCity})}
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