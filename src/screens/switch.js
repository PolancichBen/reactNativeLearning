import React, { useState } from "react";
import { View, Switch, StyleSheet, Button } from "react-native";

const Switches = ({navigation})=> {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

return (
  <View>
    <View>
      <Button 
      title="Return Home"
      onPress={()=> navigation.navigate('Home')}
      />
    </View>
    <View style={styles.container}>
      <Switch
      trackColor={{ false: 'red', true: 'blue'}}
      thumbColor={isEnabled ? 'yellow' : 'green'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      />
    </View>
  </View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Switches