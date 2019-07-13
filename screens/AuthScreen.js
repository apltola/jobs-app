import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const navigationOptions = {
    title: 'Auth'
  }

  const id = navigation.getParam('id', 0);
  const jokuParam = navigation.getParam('jokuParam', 'default_value');

  return (
    <View>
      <Text>AUTHSCREEN</Text>
      <Text>AUTHSCREEN</Text>
      <Text>AUTHSCREEN</Text>
      <Text>AUTHSCREEN</Text>
      <Text>{id || 'nääh'}</Text>
      <Text>{jokuParam || 'nääh'}</Text>
    </View>
  );
}

AuthScreen.navigationOptions = {
  headerTitle: 'Auth'
}

export default AuthScreen;