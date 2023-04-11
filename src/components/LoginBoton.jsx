import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme.js'

const Login = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style = {styles.container} activeOpacity={0.7}>
            <Text style = {styles.label}>Iniciar sesión</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    width: '90%',
    height: 40,
    backgroundColor: theme.colors.highlight,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: theme.fontWeights.bold,
  },
});

export default Login;