import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to job_app', color: '#48BEFF' },
  { text: 'Use this to get a job goddammit', color: '#32CDD1' },
  { text: 'Set your location, then swipe away', color: '#43C59E' },
];

const WelcomeScreen = ({ navigation }) => {
  const onSlidesComplete = () => {
    navigation.navigate('Auth');
  }

  return (
    <View style={styles.viewStyle}>
      <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
    </View>
  );
}

WelcomeScreen.navigationOptions = {
  headerTitle: 'Welcome'
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  }
});

export default WelcomeScreen;