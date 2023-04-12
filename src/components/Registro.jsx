import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import theme from "../theme";
import Constants from 'expo-constants';

export default function Registro({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
    function manejoRegistro() {
        // Lógica de registro
        if (password !== verifyPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden. Inténtelo de nuevo.')
            return;
        }
        // Continua con el proceso de registro
        navigation.navigate("Auth");
    }
    
    return(
        <SafeAreaView style = {styles.container}>
          <ScrollView>
            <Text style = {styles.header}>Bienvenido</Text>
            <TextInput
              style = {styles.input}
              placeholder="Nombre"
              value = {username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style = {styles.input}
              placeholder="Correo"
              value = {email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style = {styles.input}
              placeholder="Teléfono"
              value = {phone}
              onChangeText={(text) => setPhone(text)}
              secureTextEntry
            />
            <TextInput
              style = {styles.input}
              placeholder="Contraseña"
              value = {password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              style = {styles.input}
              placeholder="Confirmar contraseña"
              value = {verifyPassword}
              onChangeText={(text) => setVerifyPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={manejoRegistro}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      alignSelf: 'center',
      fontSize: theme.size.h1,
      fontWeight: theme.fontWeights.bold,
      marginTop: '20%',
      marginBottom: 20,
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    input: {
      alignSelf: 'center',
        marginVertical: 5,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 8,
        width: '90%'
    },
    button: {
        backgroundColor: theme.colors.highlight,
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
        width: '90%',
        alignSelf: 'center'
    },
    buttonText: {
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center'
    }
});
