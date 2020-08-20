import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
const image = require('./pizza.jpg')
const ImagesBackground = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
      title="Go back Home"
      onPress={()=> navigation.navigate('Home')}
      />
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside The Pizza</Text>
      </ImageBackground>

      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ImagesBackground;
