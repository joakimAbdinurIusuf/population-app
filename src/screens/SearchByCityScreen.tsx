import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBarAndButton';
import useCity from '../hooks/useCity';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, result, errorMessage] = useCity();
    
    console.log(result);

    return(
        <View>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <SearchBar 
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Text>Name of city: {result.name}</Text>
            <Text>Population: {result.population}</Text>
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