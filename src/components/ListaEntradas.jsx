import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme.js'
import { Ionicons } from '@expo/vector-icons';

const Texto = props => {
    const direccion = props.direccion.length > 35 ? props.direccion.slice(0, 35) + '...' : props.direccion;
    return(
        <View style = {styles.division}>
            <Text style = {{fontWeight: theme.fontWeights.bold}}>{props.destino}</Text>
            <Text style = {{paddingBottom: 10}}>{direccion}</Text>
            <Text>{props.fecha} - {props.hora}</Text>
            <Text>{props.moneda} {props.precio}</Text>
        </View>
    )
}

const ListaEntradas = (props) => (
    <View key = {props.entrada} style = {styles.container}>
        <Ionicons name={'time-outline'} size={50} color={theme.colors.dark} style = {styles.icon}/>
        <Texto {... props}/>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    division: {        
        textAlign: 'left'
    },
    icon: {
        alignSelf: 'center',
        marginLeft: -10
    }
});

export default ListaEntradas