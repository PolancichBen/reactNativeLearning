import React, { useState } from 'react';
import { TextInput, View, Button, Text, StyleSheet } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);


const TextInputting = ({navigation}) => {
  const [input, setInput] = useState('Placeholder Text...');
  const [multiInput, setMultiInput] = useState('Multi Placeholder Text...');
  return (
    <View style={styles.container}>

      <View>
        <Button
        title="Return Home"
        onPress={()=>navigation.navigate('Home')}
        />
      </View>
      <Separator />
      <View>
        <Text>Here is a Single Line Text Input</Text>
        <TextInput 
        style={{ borderColor: 'gray', borderWidth: 1 }}
        onChange={text => setInput(text)}
        value={input}
        />
      </View>
      <Separator />
      <Separator />
      <View>
        <Text>Here is a Multi Line Text Input</Text>
        <TextInput 
        style={{ borderColor: 'gray', borderWidth: 1 }}
        multiline
        numberOfLines={4}
        onChangeText={text => setMultiInput(text)}
        value={multiInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
  },
});

export default TextInputting;