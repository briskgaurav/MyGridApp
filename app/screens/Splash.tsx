import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined; // Define any params your screen needs here
  TabNavigation: undefined;
  // Other screens you have in your stack
};

type SplashNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
type SplashProps = {
  navigation: SplashNavigationProp;
};

const Splash = ({navigation}:SplashProps) => {
  const goNewScreen = () => {
    setTimeout(() => {
        navigation.replace("TabNavigation")
    }, 2000);
  };
  return (
    <View>
      <Button onPress={goNewScreen} title='Press' />
    </View>
  );
};

export default Splash;
