import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, Button } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);
const MinorSeparator = () => (
  <View style={styles.minorSeparator} />
);

const ActivityIndicatorComponent = ({navigation}) => {
  return (
  <View>
    <View>
      <Button 
      title="Go Home"
      onPress={()=>navigation.navigate("Home")}
      />
    </View>
    <Separator />
    <View style={[styles.container, styles.horizontal]}>
    
    <Text style={styles.text}>Default Activity Indicator</Text>
    <MinorSeparator />
    <ActivityIndicator />
    <Separator />

    <Text style={styles.text}>Large Size Activity Indicator</Text>
    <MinorSeparator />
    <ActivityIndicator size="large" />
    <Separator />

    <Text style={styles.text}>Small Size Activity Indicator with Color</Text>
    <MinorSeparator />
    <ActivityIndicator size="small" color="purple" />
    <Separator />

    <Text style={styles.text}>Large Activity Indicator with Color</Text>
    <MinorSeparator />
    <ActivityIndicator size="large" color="red" />
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: "column",
    marginVertical: 20,
    padding: 10
  },
  separator: {
    marginVertical: 20,
  },
  minorSeparator: {
    marginVertical: 10,
  },
  text:{
    textAlign:'center'
  },
});

export default ActivityIndicatorComponent