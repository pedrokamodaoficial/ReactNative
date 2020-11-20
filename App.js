import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Contato from './pages/Contatos';
import Cameras from './pages/Camera';
import TextToSpeech from './pages/TextToSpeech';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contato" component={Contato} />
        <Tab.Screen name="Cameras" component={Cameras} />
        <Tab.Screen name="TextToSpeech" component={TextToSpeech} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

