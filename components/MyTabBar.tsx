import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Bars2Icon,
  BoltIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  SunIcon,
} from "react-native-heroicons/outline";

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const renderIcon = (routeName: string, size: number, hex: string) => {
    switch (routeName) {
      case "MainScreen":
        return <BoltIcon size={size} strokeWidth={1.2} color={hex} />;
      case "TorchScreen":
        return <SunIcon size={size} strokeWidth={1.2} color={hex} />;
      case "screen3":
        return <Cog6ToothIcon size={size} strokeWidth={1.2} color={hex} />;
      case "screen4":
        return <ChartBarIcon size={size} strokeWidth={1.2} color={hex} />;
      default:
        return <HomeIcon size={size} strokeWidth={1.2} color={hex} />;
    }
  };

  return (
    <View className="flex-row items-center justify-between gap-2 absolute bottom-12 mx-16 bg-white/10 elevation-sm rounded-full px-1 py-2">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className="flex items-center justify-center rounded-full h-20 w-20"
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.7}
            style={{
              backgroundColor: isFocused
                ? "rgba(255, 255, 255,0.99)"
                : "rgba(255, 255, 255,0.12)",
              borderColor: isFocused ? "black" : "rgba(255, 255, 255,0.2)",
              borderWidth: 1,
            }}
          >
            {renderIcon(route.name, 25, isFocused ? "black" : "white")}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
