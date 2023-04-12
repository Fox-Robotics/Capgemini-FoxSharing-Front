import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../theme'

const Destino = ({nombre, direccion}) => {
    return(
        <View style = {styles.container}>
            <Text>{nombre}</Text>
            <Text>{direccion}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignSelf: 'center',
            width: '100%',
            borderRadius: 8,
            backgroundColor: theme.colors.bg,
            marginTop: 10,
            padding: 10
        }
    }
)

export default Destino