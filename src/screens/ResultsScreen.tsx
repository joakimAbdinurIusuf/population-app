import { StyleSheet, Text, View } from 'react-native';
import { CityData } from '../types/GeoNamesData';

/**
 * The results screen, which shows the name of a city and its' population.
 * 
 * @returns A results screen.
 */
export default function ResultsScreen({navigation}: any) {
    const nameOfCity: CityData = navigation.getParam("name");
    const poplationSize: CityData = navigation.getParam("population");

    return(
        <View>
            <Text style={styles.title}>{nameOfCity}</Text>
            <View style={styles.populationContainer}>
                <Text>POPULATION</Text>
                <Text style={styles.population}>{poplationSize}</Text>
            </View>
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
    population: {
        fontSize: 30,
        textAlign: "center",
    },
    populationContainer : {
        height: 120,
        borderColor: "black",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
});