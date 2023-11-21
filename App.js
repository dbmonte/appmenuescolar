import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/inicio.png')}
        style={styles.background}
      >
        <TouchableOpacity style={styles.submit} onPress={handleButtonPress}>
          
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const handleButtonPress = () => {
  // Coloque aqui a ação a ser executada quando o botão for pressionado
  alert('Iniciando');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  submit: {
    position: 'absolute',
    bottom: 115, // Posição vertical do botão
    left: 100, // Posição horizontal do botão
    backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo do botão com transparência
    padding: 45,
    margin:1,
    borderRadius: 20,
    width: 140,
    height: 10,
  },
});

