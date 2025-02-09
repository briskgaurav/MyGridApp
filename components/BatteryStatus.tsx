import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { colors } from "@/utils/colors";
import * as Battery from "expo-battery";
import * as Haptics from 'expo-haptics';


const BatteryStatus = () => {
  const [batteryPercent, setBatteryPercent] = useState(0);
  const [isCharging, setIsCharging] = useState(false);

  const getBatteryInfo = async () => {
    const BatteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryPercent(BatteryLevel * 100);

    const chargingStatus = await Battery.getBatteryStateAsync();
    if (chargingStatus === 2) {
      setIsCharging(true);
    } else {
      setIsCharging(false);
    }
  };

  useEffect(() => {
    getBatteryInfo();
    const BatteryListner = Battery.addBatteryLevelListener((info) => {
      setBatteryPercent(info.batteryLevel * 100);
    });
    const chargingListner = Battery.addBatteryStateListener((info) => {
      {info.batteryState === 2 ? setIsCharging(true) : setIsCharging(false)}
    });
    return () => {
      BatteryListner.remove();
      chargingListner.remove();
    };
  }, []);

  return (
    <View className="w-72 h-72 flex items-center justify-center rounded-full bg-white/5 ">
      <View className="w-72 h-72 flex items-center justify-center rounded-full border border-zinc-600">
        <CircularProgress
          value={batteryPercent}
          progressValueFontSize={50}
          valueSuffix="%"
          radius={110}
          duration={2000}
          progressValueColor={colors.white}
          maxValue={100}
          title={"Battery"}
          titleColor={"white"}
          subtitle={isCharging ? "Charging.." : "Not Charging"}
          subtitleFontSize={12}
          subtitleStyle={{ color: "white" }}
          activeStrokeColor={isCharging ? colors.teal : colors.yellow}
          inActiveStrokeColor={colors.white}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={1}
          activeStrokeWidth={5}
        />
      </View>
    </View>
  );
};

export default BatteryStatus;
