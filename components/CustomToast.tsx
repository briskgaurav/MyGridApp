import { View, Text } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { colors } from "@/utils/colors";

const CustomToast = () => {
  return Toast.show({
    type: "error",
    position: "top",
    text1: "NEED PERMISSIONS!",
    text2: "This is a custom toast with black color design",
    visibilityTime: 2000,
    autoHide: true,
    text1Style:{
      color:colors.black,
      fontWeight:'bold'
    },
    
  });
};

export default CustomToast;
