import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 
 * @param props 
 * @returns 
 */
export default function ThreeBiggestCitiesScreen({navigation}: any) {
    const cities = navigation.getParam("all");
    console.log(cities);
    return(
        <View>
            <Text style={styles.title}>{cities[0].countryName}</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
            <Text style={styles.title}>Three biggest cities</Text> 
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