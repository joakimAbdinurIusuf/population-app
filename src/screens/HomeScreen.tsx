import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text> 
            <Button 
                title="SEARCH BY CITY" 
                onPress={() => console.log("pressed")}
            />
            <Button 
                title="SEARCH BY COUNTRY" 
            />
        </View>
    )
}

// TODO: Extract into a single component to reuse this on all screens?
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    }
});