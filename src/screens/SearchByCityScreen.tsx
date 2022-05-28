import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import GeoNames from '../api/GeoNames';

/**
 * The search by city screen that is navigated to from the home screen.
 * 
 * @returns A search by city screen.
 */
export default function SearchByCityScreen() {
    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try {
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: searchTerm // searchTerm,
                }
            });
    
            /*
            When we enter the name of a city, e.g. Stockholm, it appears as the first 
            element of the geonames array. Therefore, we check what information is present at
            geonames[0].
    
            We also have to check that the fclName attribute contains the substring "city", as
            we are only interested in citites, not mountains for instance.
            */
            if (response.data.geonames[0].fclName.includes("city")) {
                setResult(response.data.geonames);
            } 
        } catch (err) {
            setErrorMessage("Oops! Looks like that city doesn't exist :(")
        }
    };

    return(
        <View>
            <Text style={styles.title}>SEARCH BY CITY</Text>
            <SearchBar 
                searchTerm={searchTerm} 
                onTermChange={setSearchTerm} 
                onCitySubmit={searchApi}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Text>We have found {result.length} results</Text>
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