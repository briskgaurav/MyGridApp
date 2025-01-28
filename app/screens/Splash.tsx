import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  TabNavigation: undefined;

};


type SplashProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>
};

const Splash = ({navigation}:SplashProps) => {
  const goNewScreen = () => {
    setTimeout(() => {
        navigation.replace("TabNavigation")
    }, 20);
  };
  return (
    <View>
      <Button onPress={goNewScreen} title='SplashScreen' />
    </View>
  );
};

export default Splash;
