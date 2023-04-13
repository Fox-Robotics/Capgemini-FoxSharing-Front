import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const ReservarBoton = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Reservar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.highlight,
        padding: '3%',
        borderRadius: 8,
        marginBottom: '5%',
    },
    text: {
        fontWeight: theme.fontWeights.bold,
    }
})

export default ReservarBoton