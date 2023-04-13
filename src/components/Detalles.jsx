import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import theme from '../theme';
import InfoBox from './InfoBox';

const Detalles = () => {
    return(
    <View style = {styles.container}>
        <View>
            <InfoBox dato={dato} titulo={titulo}></InfoBox>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bg,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    }
})

export default Detalles