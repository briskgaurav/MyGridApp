import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../../utils/colors'

const Screen3 = () => {
  return (
    <View style={{backgroundColor:colors.black}} className='h-full w-full p-1'>
    <Header screenNo={2} />
  </View>
  )
}

export default Screen3