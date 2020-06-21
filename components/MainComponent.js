import React from 'react';
import {View,Text,Image } from 'react-native';
import Menu from './Menu';
import Home from './Home';
import DishDetails from './DishDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactComponent from  './ContactComponent';
import AboutComponent from './AboutComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function HomeNavigator(){
  return(
      <NavigationContainer>
       <Stack.Navigator
      >
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />

      </Stack.Navigator>
      </NavigationContainer>
  );
      
};

function RootStack(){
    return(
        <NavigationContainer>
         <Stack.Navigator
        >
          
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
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

function DrawerCon(){
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{
    itemStyle: { marginVertical: 10 },
  }}>
      <Drawer.Screen 
        name="Food" 
        component={Home} 
        options={{drawerLabel:'',drawerIcon: () => <Image source={require('./images/logo.png')} /> }}
        />
        <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{drawerIcon: () => <Icon
          size={23}
          name='home'></Icon> }}
        />
        
        <Drawer.Screen 
        name="About Us" 
        component={AboutComponent} 
        options={{drawerIcon: () => <Icon
          size={23}
          name='address-book'></Icon> }}
        />
        <Drawer.Screen name="Menu" component={Menu} 
        options={{drawerIcon: () => <Icon
          size={23}
          name='bars'></Icon> }}/>
        <Drawer.Screen name="Contact us" component={ContactComponent} 
          options={{drawerIcon: () => <Icon
          size={23}
          name='id-card'></Icon> }}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default class MainComponent extends React.Component{

 render(){

     return(
         <View style={{flex:2}}>
           
           <DrawerCon />
        </View>
     );
 }
}

