import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";

import Constants from "expo-constants";

const Status = ({ navigation }) => {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  const colors = ['red','blue','green','yellow','pink','purple','gold']
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0])
  const [barColor,setBarColor] = useState(colors[0])

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  const changeStatusBarColor = () => {
    const colorId = colors.indexOf(barColor) + 1;

    if (colorId === colors.length){
      return setBarColor(colors[0]);
    }
    return setBarColor(colors[colorId]);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>StatusBar Visibility: {!visibleStatusBar ? 'Visible' : 'Hidden'}</Text>
      </View>
      <StatusBar backgroundColor={barColor} barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Status Bar" onPress={() => changeVisibilityStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change Status Bar Style" onPress={() => changeStyleStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change Status Bar Color" onPress={() => changeStatusBarColor()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 10
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center',
    marginVertical: 10
  }
});
export default Status;