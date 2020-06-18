import React from 'react';
import {View,Text } from 'react-native';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';
import DishDetails from './DishDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();

function RootStack(){
    return(
        <NavigationContainer>
         <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{ gestureEnabled: false }}
        >
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: 'Menu' }}
          />
          <Stack.Screen
            name="DishDetails"
            component={DishDetails}
            initialParams={{ dishId: 'dishId' }}
          />
        </Stack.Navigator>
        </NavigationContainer>
    );
        
};

export default class MainComponent extends React.Component{

 render(){

     return(
         <View style={{flex:1}}>
           <RootStack />
        </View>
     );
 }
}

