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
      <Separator />
      <Button 
      style={styles.btn}
      title="Go to Image Background"
      onPress={()=> navigation.navigate('ImageBack')}
      />
      <Separator />
      <Button 
      style={styles.btn}
      title="Go to Modals"
      onPress={()=> navigation.navigate('Modal')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Pressable"
      onPress={()=> navigation.navigate('PressableComp')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Refresher"
      onPress={()=> navigation.navigate('Refresh')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Scrollable"
      onPress={()=> navigation.navigate('Scroll')}
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
