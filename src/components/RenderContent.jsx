import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import Destino from './Destino';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';
import Vehiculo from './Vehiculo';
import axios from 'axios';


const vehiculos = [
    {nombre: 'Nissan Versa Sense TM', minutos: 5, imagen: 'https://imgur.com/aWeyhz5.jpg', transmision: 'automatica', pasajeros: 4, localizacion: 'Avenida Mariano Otero, 1499'},
    {nombre: 'Ford Explorer XLT', minutos: 7, imagen: 'https://imgur.com/S82J1p1.jpg', transmision: 'automatica', pasajeros: 8, localizacion: 'Avenida Mariano Otero, 1499'}
]

const SheetContent = (props) => {

    const getAddressLocation = async (text) => {
        try{            
            url =  "https://foxsharing.azurewebsites.net/address?address=" + text
            const response = await axios.get(url, {});
            return response.data
        }
        catch (error){
            //Alert.alert('Error en inicio de sesión', 'Intente de nuevo.')
            console.error(error);
        }
    }
    
    
    const getRoute = async (text) => {
        try{            
            location = await getAddressLocation(text)          
            url =  "https://foxsharing.azurewebsites.net/route?query=" + props.location.latitude + "," +  props.location.longitude + ":" +  location.lat + "," + location.lon
            const response = await axios.get(url, {});
            //console.log(eval(response.data));
            props.setRoute(eval(response.data));
        }
        catch (error){
            //Alert.alert('Error en inicio de sesión', 'Intente de nuevo.')
            console.error(error);
        }
    }



    const [showInfo, setShowInfo] = useState(false);
    const [text, setText] = useState('');
    const [destinos, setDestinos] =  useState([
        {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
        {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
        {nombre: 'Expo Guadalajara', direccion: 'Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.'},
    ]);
    const LocationSelectToggle = () => {
        setShowInfo(prevState => !prevState);
    }
    const getPosibleLocations = async (text) => {
    try{
        url =  'https://foxsharing.azurewebsites.net/addressFuzzy?address=' + text 
        const response = await axios.get(url, {});

        //console.log(eval(response.data));
        setDestinos(eval(response.data))
    }
    catch (error){
        //Alert.alert('Error en inicio de sesión', 'Intente de nuevo.')
        console.error(error);
    }
}

    const renderContent = () => {
        if(showInfo){
            return(
                <View style = {styles.container}>
                    <TouchableOpacity style = {styles.icon} ActiveOpacity={0.7} onPress={LocationSelectToggle}>
                        <Ionicons name={'arrow-back-outline'} size={24} color={theme.colors.dark}/>
                    </TouchableOpacity>
                    <Text style = {styles.h1}>Vehículos cerca</Text>
                    <FlatList
                    style = {{width: '100%'}}
                    data={vehiculos}
                    renderItem={({ item }) => (
                        <Vehiculo nombre={item.nombre} minutos={item.minutos} imagen={item.imagen} transmision={item.transmision} pasajeros = {item.pasajeros} localizacion = {item.localizacion} navigation={props.navigation}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
        else{
            return(
                <View style = {styles.listContainer}>
                <TextInput
                style={styles.searchInputText}
                placeholder="¿A dónde vas?"
                placeholderTextColor={'#dddddd'}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                onSubmitEditing={()=>{getPosibleLocations(text)}}
                />
                <FlatList
                data={destinos}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>{LocationSelectToggle(); getRoute(item.data)}}>
                        <Destino nombre={""} direccion={item.data} />
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
        width: '100%'
    },
    listContainer :{
        paddingBottom: "7%"
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