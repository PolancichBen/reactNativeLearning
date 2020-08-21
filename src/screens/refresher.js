import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Refresher = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [showButton,setShowButton] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false), setShowButton(true));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        showButton
        ? <Button 
        title="Go Home"
        onPress={()=>navigation.navigate("Home")}
        />
        : null
      }
      <ScrollView
      contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull Down to Refresh</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Refresher;