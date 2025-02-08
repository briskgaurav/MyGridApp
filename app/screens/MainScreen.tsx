import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

import StatusBarComponent from '../components/StatusBarComponent';
import {BoltIcon} from 'react-native-heroicons/outline';
import Header from '../components/Header';

const MainScreen = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: colors.black}}
      contentContainerClassName="w-screen h-screen p-1">
      <Header screenNo={0} />
      //BatteryStatus
      <View className="h-2/5 w-full mb-2"></View>
      
      <View className="h-2/6 w-full p-1 rounded-3xl">
        //Boxes
        <View className="flex-row h-2/3 mb-2 gap-2">
          <View className="h-full  w-[49%] flex-row p-2 bg-white/5 rounded-[20%] ">
            <View className="bg-white/5 flex items-center border-white/20 border justify-center w-20 h-20 rounded-full absolute right-2 top-2">
              <BoltIcon size={20} color={'white'} />
            </View>
          </View>
          <View className="h-full w-[49%] flex-row  bg-white/5 rounded-[20%] "></View>
        </View>
        <View className="h-[80%] w-full flex-row  bg-white/5 rounded-[15%] "></View>
      </View>
      <StatusBarComponent />
    </ScrollView>
  );
};

export default MainScreen;
