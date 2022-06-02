import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SearchBarAndButton from '../components/SearchBarAndButton';
import useOrderCitiesBySize from '../hooks/useOrderCitiesBySize';

/**
 * The search by country screen that is navigated to from the home screen. The user can
 * search for a city. If it exists, the user will be taken to the ThreeBiggestCitiesScreen, otherwise
 * an error message will be thrown. The error message is defined in the useOrderCitiesBySize hook.
 * 
 * @returns A search by country screen.
 */
export default function SearchByCountryScreen({navigation}: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCountryCodeApi, threeBiggestCities, errorMessage, dataIsFetched, fetchingData] = useOrderCitiesBySize();

    let prompt: string = "Enter a country";
    
    return(
        <View>
            <Text style={styles.title}>SEARCH BY COUNTRY</Text>
            <SearchBarAndButton 
                prompt={prompt} 
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={() => (searchCountryCodeApi(searchTerm))}
            />
            {fetchingData ? <ActivityIndicator /> : null}
            {dataIsFetched ? navigation.replace("BiggestCities", 
            {
                name1: threeBiggestCities[0], population1: threeBiggestCities[1],
                name2: threeBiggestCities[2], population2: threeBiggestCities[3],
                name3: threeBiggestCities[4], population3: threeBiggestCities[5],
                countryName: threeBiggestCities[6]
            }) : null}
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
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
    errorMessage: {
        fontSize: 15,
        marginTop: 30,
        textAlign: "center",
    }
});