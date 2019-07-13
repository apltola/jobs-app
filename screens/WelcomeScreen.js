import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to job_app' },
  { text: 'Set your location, then swipe away' },
];

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Slides data={SLIDE_DATA} />
    </View>
  );
}

WelcomeScreen.navigationOptions = {
  headerTitle: 'Welcome'
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'goldenrod',
    flex: 1,
  }
});

export default WelcomeScreen;