import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 
 * @param props 
 * @returns 
 */
export default function ThreeBiggestCitiesScreen({navigation}: any) {
    const cities = navigation.getParam("countryCode");
    console.log(cities);
    return(
        <View>
            <Text style={styles.title}>{cities}</Text> 
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