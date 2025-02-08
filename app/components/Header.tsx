import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {BoltIcon} from 'react-native-heroicons/solid';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';

interface HeaderProp {
  screenNo: number;
}

const Header: FC<HeaderProp> = ({screenNo}) => {
  const isCircleActive = (index: number) => index === screenNo;
  const navigation = useNavigation<CompositeNavigationProp<any, any>>();

  const handleCirclePress = (index: number) => {
    const screenNames = ['MainScreen', 'TorchScreen', 'screen3', 'screen4'];
    const screen = screenNames[index];
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <View className="flex-row p-4 items-center justify-between">
      <View className="flex-row items-center gap-2">
        <BoltIcon color={'white'} size={30} />
        <Text className="text-white text-xl font-normal ">MYGRID.</Text>
      </View>
      <View className="flex-row items-center">
        {[0, 1, 2, 3].map(index => (
          <TouchableOpacity
            onPress={() => handleCirclePress(index)}
            key={index}
            className={`w-8 h-8 border flex items-center justify-center rounded-full  ${
              isCircleActive(index) ? 'border-white' : 'border-transparent'
            }`}>
            <View className={`w-2 h-2 rounded-full bg-zinc-500`} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Header;
