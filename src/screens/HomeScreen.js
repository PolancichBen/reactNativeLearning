import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
      style={styles.btn}
      title="Go to Lists"
      onPress={()=> navigation.navigate('List')}
      />
      <Separator />
      <Button 
      style={styles.btn}
      title="Go to Images"
      onPress={()=> navigation.navigate('Images')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  separator: {
    marginVertical: 8,
  },
});

export default HomeScreen;
