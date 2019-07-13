import React from 'react';
//import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,
         createStackNavigator,
         createAppContainer } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const MainNavigator = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
  Main: createBottomTabNavigator({
    Map: MapScreen,
    Deck: DeckScreen,
    Review: createStackNavigator({
      Review: ReviewScreen,
      Settings: SettingsScreen
    })
  })
})

const StackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Welcome'
  }
)

const AppContainer = createAppContainer(MainNavigator);

export default App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 2,
    //borderColor: 'red'
  },
});