import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 
 * @param props 
 * @returns 
 */
export default function ThreeBiggestCitiesScreen(props: any) {
    return(
        <View>
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