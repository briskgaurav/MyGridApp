import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import TorchScreen from '../screens/TorchScreen';
import MyTabBar from '../components/MyTabBar';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
       headerShown: false}} tabBar={(props) => <MyTabBar {...props} />}
      >
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="TorchScreen" component={TorchScreen} />
      <Tab.Screen name='screen3' component={Screen3} />
      <Tab.Screen name='screen4' component={Screen4} />

    </Tab.Navigator>
  );
};

export default TabNavigation;
