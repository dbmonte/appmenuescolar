import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
} from "react-native";

const App = () => {
  const [data, setData] = useState({
    date: "2023-07-20",
    meals: [
      {
        name: "Café da manhã",
        image: require("/cafedamanha.png"),
      },
      {
        name: "Almoço",
        image: require("/almoco.png"),
      },
      {
        name: "Lanche da tarde",
        image: require("/lanche.png"),
      },
      {
        name: "Jantar",
        image: require("/janta.png"),
      },
    ],
  });

  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Cardápio do dia</Text>
      <Text style={styles.date}>{data.date}</Text>
      <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('/background-app.png')}
        style={styles.background}
      >
      <View style={styles.meals}>
        {data.meals.map((meal, index) => (
          <View key={index} style={styles.meal}>
            <Image style={styles.mealImage} source={meal.image} />
            <Button
              title={meal.name}
              style={styles.button}
              onPress={() => {
                // TODO: Executar ação ao clicar no botão da refeição
              }}
            />
          </View>
        ))}
      </View>
      
      </ImageBackground>
    </SafeAreaView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  background: {
    width:'100%',
    height:'100%',
  },
  container1:{
    alignContent:"center",
    width:'100%',
    height:'100%',

  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "MuseoModerno",
  },
  date: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  meals: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  meal: {
    borderRadius:'10%',
    width: "50%",
  },
  mealImage: {
    width: 125,
    height: 125,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#0A2C5A",
    color: "#F0F1EB",
    width: 127,
    height: 62,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;