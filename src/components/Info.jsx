import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create(
    {
        container: {
            marginTop: 7,
            width: 328,
            height: 42,
            backgroundColor: '#E9E9ED',
            padding: 10,
            borderRadius: 8,
            flexDirection: 'row',
        },
        label: {
            flex: 1,
            fontSize: 16,
        },
        info: {
            opacity: 0.5,
            fontSize: 16,
        },
    }
)

const Info = ({ dato, info }) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>{info}:</Text>
            <Text style = {styles.info}>{dato}</Text>
        </View>
    )
}

export default Info