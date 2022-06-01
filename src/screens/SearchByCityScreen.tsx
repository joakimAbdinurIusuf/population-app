import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBarAndButton';
import useCityPopulationData from '../hooks/useCityPopulationData';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen({navigation}: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, result, errorMessage, dataIsFetched, fetchingData] = useCityPopulationData();
    
    return(
        <View>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <SearchBar 
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={() => (searchApi(searchTerm))}
            />
            {fetchingData ? <ActivityIndicator /> : null}
            {dataIsFetched ? navigation.navigate("Results", {name: result.name, population: result.population}) : null}
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