import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>Select a Component</Text>
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
      title="Go to Activity Indicator Component"
      onPress={()=> navigation.navigate('ActivityIndicatorComponent')}
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
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Status Bars"
      onPress={()=> navigation.navigate('Status')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Switches"
      onPress={()=> navigation.navigate('Switch')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Text Input"
      onPress={()=> navigation.navigate('TextInput')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to Touchable Highlights"
      onPress={()=> navigation.navigate('TouchableHighlight')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to the Touchable Opacity Component"
      onPress={()=> navigation.navigate('TouchableOpacityComponent')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to the Touchable Without Feedback Component"
      onPress={()=> navigation.navigate('TouchableWithoutFeedbackComponent')}
      />
      <Separator />
      <Button
      style={styles.btn}
      title="Go to the Virtualized List Example"
      onPress={()=> navigation.navigate('VirtualizedListExample')}
      />
      <Separator />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10
  },
  separator: {
    marginVertical: 8,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default HomeScreen;
