import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
      title="Go to Lists"
      onPress={()=> navigation.navigate('List')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
