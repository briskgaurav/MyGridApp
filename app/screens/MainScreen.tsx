import { View, Text, } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { SafeAreaView } from 'react-native-safe-area-context';

import StatusBarComponent from '../components/StatusBarComponent'

const MainScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:colors.black}} className='w-screen h-screen'>
      <View className='h-1/2 w-1/2 bg-white rounded-3xl absolute left-10 bottom-6 opacity-10 '>

      </View>
      <StatusBarComponent />
      


    </SafeAreaView>
  )
}

export default MainScreen