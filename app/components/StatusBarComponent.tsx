import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

export default function StatusBarComponent() {
  return (
   <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
  )
}