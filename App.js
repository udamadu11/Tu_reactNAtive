import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './components/MainComponent';

export default class App extends React.Component{
  render(){
    return(
      <MainComponent/>
    );
  }
}
