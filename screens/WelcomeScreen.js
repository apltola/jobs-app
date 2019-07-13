import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View>
      <Text>WELCOME SCREEN</Text>
      <Text>WELCOME SCREEN</Text>
      <Text>WELCOME SCREEN</Text>
      <Text>WELCOME SCREEN</Text>
      {/* <Button
        title="Go to auth page"
        onPress={() => navigation.navigate('Auth', {
          id: 123123,
          jokuParam: 'juukeli'
        })}
      /> */}
    </View>
  );
}

WelcomeScreen.navigationOptions = {
  headerTitle: 'Welcome'
}

export default WelcomeScreen;