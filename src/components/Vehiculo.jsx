import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../theme'

const Vehiculo = ({refRBSheet, nombre, minutos, imagen, transmision, pasajeros, localizacion, navigation}) => {
    return(
        <View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {refRBSheet.current.close();  navigation.navigate('Car',{nombre, minutos, imagen, transmision, pasajeros, localizacion})  }}>
                <View style = {styles.container}>
                    <Image source={{ uri: imagen }} style={styles.car} />
                        <View style = {styles.textContainer}>
                            <Text style = {styles.name}>{nombre}</Text>
                            <Text>{minutos} minutos caminando</Text>
                        </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            flex: 1,
            alignSelf: 'center',
            width: '100%',
            borderRadius: 8,
            backgroundColor: theme.colors.bg,
            marginTop: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        textContainer: {
            height: '100%',
            width: '55%',
        },
        car: {
            width: '35%',
            aspectRatio: 308/174,
            marginHorizontal: '5%'
        },
        name: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.size.h2,
        }
    }
)

export default Vehiculo