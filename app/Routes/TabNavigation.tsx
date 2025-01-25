import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../screens/MainScreen'
import TorchScreen from '../screens/TorchScreen'

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='MainScreen' component={MainScreen} />
            <Tab.Screen name='TorchScreen' component={TorchScreen} />
        </Tab.Navigator>
        
      
   
  )
}

export default TabNavigation