import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

const ImagesComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
      style={styles.btn}
      title="Go back Home"
      onPress={()=> navigation.navigate('Home')}
      />
      <Image
        style={styles.stretch}
        source={require('./pizza.jpg')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  }
});

export default ImagesComponent;
