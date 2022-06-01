import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBarAndButton';
import useCountryCode from '../hooks/useCityPopulationData';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen({navigation}: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCountryCodeApi, result, errorMessage, dataIsFetched, fetchingData] = useCountryCode();
    
    return(
        <View>
            <Text style={styles.title}>SEARCH BY COUNTRY</Text>
            <SearchBar 
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={() => (searchCountryCodeApi(searchTerm))}
            />
            {fetchingData ? <ActivityIndicator /> : null}
            {dataIsFetched ? navigation.navigate("BiggestCities", {name: result.name, population: result.population}) : null}
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