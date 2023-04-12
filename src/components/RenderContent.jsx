import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import Destino from './Destino';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

const destinos = [
    {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
    {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
    {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
]
const vehiculos = [
    {nombre: 'Nissan Versa Sense TM', minutos: 5, imagen: '../data/cars/nissan_2023_versa_sense.png'},
    {nombre: 'Ford Explorer XLT', minutos: 7, imagen: '../data/cars/ford_2023_explorer.png'}
]

const SheetContent = ({height}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [text, setText] = useState('');
    const LocationSelectToggle = () => {
        setShowInfo(prevState => !prevState);
    }
    const renderContent = () => {
        if(showInfo){
            return(
                <View style = {styles.container}>
                    <TouchableOpacity style = {styles.icon} ctiveOpacity={0.7} onPress={LocationSelectToggle}>
                        <Ionicons name={'arrow-back-outline'} size={24} color={theme.colors.dark}/>
                    </TouchableOpacity>
                    <Text style = {styles.h1}>Vehículos cerca</Text>
                    {/*
                    <FlatList
                    data={vehiculos}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.7} onPress={LocationSelectToggle}>
                            <Destino nombre={item.nombre} direccion={item.direccion} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />
                    */}
                </View>
            )
        }
        else{
            return(
                <View>
                <TextInput
                style={styles.searchInputText}
                placeholder="¿A dónde vas?"
                placeholderTextColor={'#dddddd'}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <FlatList
                data={destinos}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={LocationSelectToggle}>
                        <Destino nombre={item.nombre} direccion={item.direccion} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
                </View>
            )
        }
    }
    return(
        <View>
            {renderContent()}
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    searchInputText:{
      color: "white",
      padding: "6%",
      backgroundColor: "black",
      borderRadius: 100,
    },
    icon: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    h1: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontSize: theme.size.h1,
        fontWeight: theme.fontWeights.bold,
    }
})

export default SheetContent