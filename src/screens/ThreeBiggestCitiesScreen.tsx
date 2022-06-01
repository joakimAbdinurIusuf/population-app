import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 
 * @param props 
 * @returns 
 */
export default function ThreeBiggestCitiesScreen({navigation}: any) {
    const name1 = navigation.getParam("name1");
    const population1 = navigation.getParam("population1");
    const name2 = navigation.getParam("name2");
    const population2 = navigation.getParam("population2");
    const name3 = navigation.getParam("name3");
    const population3 = navigation.getParam("population3");
    return(
        <View>
            <Text>{name1}</Text> 
            <Text>{population1}</Text> 
            <Text>{name2}</Text> 
            <Text>{population2}</Text> 
            <Text>{name3}</Text> 
            <Text>{population3}</Text> 
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