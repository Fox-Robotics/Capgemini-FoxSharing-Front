import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const InfoBox = ( {dato, info} ) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{info}</Text>
            <Text style = {styles.description}>{dato}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '3%',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 8,
    },
    title: {
        opacity: 0.4,
    },
    description: {
        fontWeight: theme.fontWeights.bold,
    }
})

export default InfoBox