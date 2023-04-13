import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const InfoBox = ( dato, info ) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{info}</Text>
            <Text style = {styles.description}>{dato}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    title: {
        opacity: 0.7,
    },
    description: {
        fontWeight: theme.fontWeights.bold,
    }
})

export default InfoBox