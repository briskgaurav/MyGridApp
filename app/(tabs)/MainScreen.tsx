import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../utils/colors";
import { BoltIcon } from "react-native-heroicons/outline";
import BatteryStatus from "@/components/BatteryStatus";
import Header from "@/components/Header";
import { Camera, CameraView } from "expo-camera";
import * as Haptic from "expo-haptics";
import Toast from "react-native-toast-message";
import CustomToast from "@/components/CustomToast";

const MainScreen = () => {
  const [battery, setBattery] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermission();
  });

  const ToggleTorch = () => {
    if (hasPermission === true) {
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success);
      setBattery((prev) => !prev);
    } else {
      CustomToast()
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Error);
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.black }}
      className="w-screen h-screen"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="h-full w-full p-1"
      >
        <Header screenNo={0} />
        <View className="h-2/5 flex items-center justify-center w-full mb-2">
          <BatteryStatus />
        </View>
        <View className="h-2/6 w-full p-1 rounded-3xl">
          <View className="flex-row h-2/3 mb-2 gap-2">
            <View className="h-full w-[49%] flex-row p-4 bg-white/5 rounded-[20%] ">
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={ToggleTorch}
                className="bg-white/5 flex items-center border-white/20 border justify-center w-20 h-20 rounded-full absolute right-2 top-2"
              >
                <CameraView enableTorch={battery} />
                <BoltIcon size={20} color={"white"} />
              </TouchableOpacity>

              <View className="absolute bottom-5 left-5">
                <Text className="text-white text-3xl">EnergyFlare</Text>
                <Text className="text-white font-thin text-xl">
                  0.5W - {battery ? "ON" : "OFF"}{" "}
                </Text>
              </View>
            </View>
            <View className="h-full w-[49%] flex-row  bg-white/5 rounded-[20%] "></View>
          </View>
          <View className="h-[80%] w-full flex-row  bg-white/5 rounded-[15%] "></View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default MainScreen;
