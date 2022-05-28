import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

function DisplayResult({ result, navigation }: any) {
    return(
        <View>
            <Text>Name of city: {result.name}</Text>
            <Text>Name of city: {result.population}</Text>
        </View>
    )
}

// TODO: Extract into a single component to reuse this on all screens?
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
    },
});

export default withNavigation(DisplayResult); // TODO: change so that it looks more like typescript?