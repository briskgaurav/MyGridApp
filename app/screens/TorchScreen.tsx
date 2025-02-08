import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import Header from '../components/Header'

const TorchScreen = () => {
  return (
    <View style={{backgroundColor:colors.black}} className='h-full w-full p-1'>
      <Header screenNo={1} />
    </View>
  )
}

export default TorchScreen