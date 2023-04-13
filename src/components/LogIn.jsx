import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../theme';
import Login from './LoginBoton';
import axios from 'axios';

const logInUser = async (email, password, navigation) => {
    try{
        const response = await axios.post('https://foxsharing.azurewebsites.net/login', {
            email: email,
            password: password,
        });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('Main');
    }
    catch (error){
        //Alert.alert('Error en inicio de sesión', 'Intente de nuevo.')
        console.error(error);
    }
}

export default function LogIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const login = () => {
        //Funcionalidad de logIn
        logInUser(email, password, navigation);
    };
    return(
        <View style = {styles.container}>
            <Image style = {styles.img} source={require('../data/logo.png')}/>
            <TextInput
            style = {styles.input}
            placeholder='Correo'
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
            <TextInput
            style = {styles.input}
            placeholder='Contraseña'
            onChangeText={(text) => setPass(text)}
            value={password}
            secureTextEntry
            />
            <Login onPress={login}/>
            <View style = {styles.textWrapper}>
                <Text style = {styles.subtle}>¿No tienes cuenta?</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Registro")}>
                    <Text style = {styles.subtleBold}>Regístrate</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        img:{
            marginBottom: '20%',
            aspectRatio: 533/207,
            height: undefined,
            width: '50%',
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        input: {
            marginVertical: "2%",
            borderWidth: 1,
            padding: "2%",
            paddingHorizontal: 10,
            borderColor: 'gray',
            width: '90%',
            borderRadius: 8,
        },
        subtle: {
            fontSize: 14,
            opacity: 0.4,
        },
        subtleBold: {
            fontSize: 14,
            fontWeight: theme.fontWeights.bold,
            marginLeft: 5
        },
        textWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    }
)