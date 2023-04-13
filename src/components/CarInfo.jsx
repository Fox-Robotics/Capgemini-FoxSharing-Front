import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../theme';
import Detalles from './Detalles';

export default function CarInfo ({route, navigation}) {
    const {nombre, minutos, imagen, transmision, pasajeros, localizacion} = route.params;
    return(
        <View style = {styles.container}>
            <Text style = {styles.h1}>{nombre}</Text>
            <Image source={{ uri: imagen }} style={styles.car} />
            <Detalles/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: '12%',
        alignItems: 'center',
    },
    h1: {
        fontSize: theme.size.h2,
        fontWeight: theme.fontWeights.bold,
    },
    car: {
        width: '70%',
        aspectRatio: 308/174,
        marginVertical: '5%'
    }
})