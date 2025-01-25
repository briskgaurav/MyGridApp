import "../globals.css"
import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../utils/colors"
import StatusBarComponent from "./components/StatusBarComponent"
import Navigation from "./Routes/Navigation"

const App = () => {
  return (
    <Navigation />
  )
}

export default App