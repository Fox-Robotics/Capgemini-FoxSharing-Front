import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme.js'

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 42,
    backgroundColor: theme.colors.highlight,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
  },
});

const CerrarSesion = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.label}>Cerrar sesión</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CerrarSesion;