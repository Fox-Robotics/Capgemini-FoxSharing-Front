import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";

export default function TwoFactorAuth({navigation}) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  function handleVerify() {
    // Lógica de verificación
    const verificationCode = "123456";
    if (code === verificationCode) {
      navigation.navigate("Login");
    } else {
      setMessage("Error en la verificación. Intente de nuevo.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Ingrese código de verificación.</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={code}
        onChangeText={(text) => setCode(text)}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: 'center',
    fontSize: theme.size.h1,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    width: "90%",
  },
  message: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    width: '90%',
    backgroundColor: theme.colors.highlight,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
  },
});