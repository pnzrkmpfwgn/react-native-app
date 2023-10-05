import React, { useEffect, useState,useCallback } from 'react';
import {useFonts} from 'expo-font';
import Home from './screens/home'
import * as SplashScreen from 'expo-splash-screen';
import {View,Text} from 'react-native';
import { createStackNavigator, } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from './screens/reviewDetails';

// const getFonts = () => Font.loadAsync({
//     'munito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
//   })


export default function App() {
  const [fontsLoaded] = useFonts({
        'munito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  });
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

if(!fontsLoaded){
  return undefined;
}else{
  SplashScreen.hideAsync();
}

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home"> 
        <Drawer.Screen name="Home"component={Home} />
        <Drawer.Screen name='ReviewDetails' component={ReviewDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}