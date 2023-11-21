import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/menu.png')}
        style={styles.background}
      >
        <TouchableOpacity style={styles.submit1} onPress={handleButtonPress}></TouchableOpacity>
        <TouchableOpacity style={styles.submit2} onPress={handleButtonPress}><Text style={styles.buttonText}></Text></TouchableOpacity>
        <TouchableOpacity style={styles.submit3} onPress={handleButtonPress}></TouchableOpacity>
        <TouchableOpacity style={styles.submit4} onPress={handleButtonPress}></TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const handleButtonPress = () => {
  alert('Abrindo cardapio');
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
  submit1: {
    position: 'absolute',
    top: 465,
    bottom: 15, // Posição vertical do botão
    left: 100, // Posição horizontal do botão
    backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo do botão com transparência
    padding: 45,
    margin:1,
    borderRadius: 20,
    width: 170,
    height: 50,
  },
  submit2: {
    position: 'absolute',
    top:240, 
    bottom: 14, // Posição vertical do botão
    left: 100, // Posição horizontal do botão
    backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo do botão com transparência
    padding: 5,
    margin:1,
    borderRadius: 20,
    width: 170,
    height: 70,
  },
  submit3: {
    position: 'absolute',
    top:320, 
    bottom: 30, // Posição vertical do botão
    right: 100,
    left: 100, // Posição horizontal do botão
    backgroundColor: 'rgba(0, 0, 0, 0)', // Cor de fundo do botão com transparência
    padding: 5,
    margin:1,
    borderRadius: 20,
    width: 170,
    height: 70,
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 16,
    justifyContent: 15,
  },
});