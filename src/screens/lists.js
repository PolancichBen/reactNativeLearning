import React from "react";
import { Text, StyleSheet, View, Button, FlatList, SectionList } from "react-native";

const DATA = [
  {
    name: 'Person 1',
    gender: 'M'
  },
  {
    name: 'Person 2',
    gender: 'F'
  },
  {
    name: 'Person 3',
    gender: 'M & F'
  },
];

const Item = ({title})=>(
  <View>
    <Text>{title}</Text>
  </View>
);

const Lists = ({navigation}) => {

  const renderItem = ({item})=>(
    <Item title={item.name}/>
  );

  return (
    <View>
      <Button title="Go Back Home" onPress={()=>navigation.navigate('Home')}/>
      <Text>Below is a Flat List</Text>
      <FlatList 
      data={DATA}
      keyExtractor={item => item.name}
      renderItem={renderItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default Lists;
