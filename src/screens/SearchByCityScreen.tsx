import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SearchBarAndButton from '../components/SearchBarAndButton';
import useCityPopulationData from '../hooks/useCityPopulationData';

/**
 * The search by city screen that is navigated to from the home screen. The user can
 * search for a city. If it exists, the user will be taken to the ResultsScreen, otherwise
 * an error message will be thrown. The error message is defined in the useCityPopulationData hook.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen({navigation}: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCityApi, result, errorMessage, dataIsFetched, fetchingData] = useCityPopulationData();

    let prompt: string = "Enter a city";
    
    return(
        <View>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <SearchBarAndButton
                prompt={prompt}
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={() => (searchCityApi(searchTerm))}
            />
            {fetchingData ? <ActivityIndicator /> : null}
            {dataIsFetched ? navigation.replace("Results", {name: result.name, population: result.population}) : null}
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