import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';

const TextInputting = ({navigation}) => {
  const [input, setInput] = useState('Placeholder Text...');
  return (
    <View>

      <View>
        <Button
        title="Return Home"
        onPress={()=>navigation.navigate('Home')}
        />
      </View>
      <View>
        <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChange={text => setInput(text)}
        value={input}
        />
      </View>
    </View>
  )
}

export default TextInputting;