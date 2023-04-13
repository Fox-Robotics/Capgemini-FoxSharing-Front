import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../theme';
import InfoBox from './InfoBox';
import ReservarBoton from './ReservarBoton';

export default function CarInfo ({route, navigation}) {
    const {nombre, minutos, imagen, transmision, pasajeros, localizacion} = route.params;
    return(
        <View style = {styles.container}>
            <Text style = {styles.h1}>{nombre}</Text>
            <Image source={{ uri: imagen }} style={styles.car} />
            <View style = {styles.secondaryContainer}>
                <View>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {styles.smallBox}>
                            <InfoBox dato={transmision} info='Transmisión'/>
                        </View>
                        <View style = {styles.smallBox}>
                            <InfoBox dato='Disponible' info='A/C'/>
                        </View>
                        <View style = {styles.smallBox}>
                            <InfoBox dato={pasajeros} info='Pasajeros'/>
                        </View>
                    </View>
                    <View>
                        <InfoBox dato={localizacion} info='Localización'/>
                        <InfoBox dato={(minutos + ' minuto(s) caminando.')} info='Distancia'/>
                    </View>
                </View>
                <View style = {{justifyContent: 'space-between'}}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <ReservarBoton/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: '12%',
        alignItems: 'center',
    },
    secondaryContainer: {
        flexGrow: 1,
        padding: '5%',
        backgroundColor: theme.colors.bg,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    h1: {
        fontSize: theme.size.h2,
        fontWeight: theme.fontWeights.bold,
    },
    car: {
        width: '70%',
        aspectRatio: 308/174,
        marginVertical: '5%'
    },
    smallBox: {
        width: '32%',
    }
})