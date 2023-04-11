import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme.js'

const ListaEntradas = (props) => (
    <View key = {props.entrada} style = {styles.container}>
        <Text>{props.destino}</Text>
        <Text>{props.fecha} - {props.hora}</Text>
        <Text>{props.precio}</Text>
    </View>
)
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
        backgroundColor: '#E9E9ED',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
    }
});

export default ListaEntradas