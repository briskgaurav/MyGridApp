import React from "react";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MyTabBar from "@/components/MyTabBar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <MyTabBar {...props} />} >
        <Tabs.Screen name="MainScreen" />
        <Tabs.Screen name="TorchScreen" />
        <Tabs.Screen name="Screen3" />
        <Tabs.Screen name="Screen4" />
      </Tabs>
    </>
  );
}
