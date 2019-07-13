import React, {useState} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

const ReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Text>REVIEW SCREEN</Text>
      <Text>REVIEW SCREEN</Text>
      <Text>REVIEW SCREEN</Text>
      <Text>REVIEW SCREEN</Text>
    </View>
  );
}

ReviewScreen.navigationOptions = ({ navigation }) => ({
  title: 'Review Jobs',
  headerRight: (
    <Button
      title='Settings'
      onPress={() => navigation.navigate('Settings')}
    />
  ),
  headerStyle: {
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});

export default ReviewScreen;