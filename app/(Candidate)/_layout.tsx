import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const tabroot = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='home' size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name='genrative_ai'
        options={{
          headerShown: false,
          title: "Genrative AI",
          tabBarIcon: ({ color, size }) => {
            return (
              <View className='relative bottom-5'>
                <FontAwesome5 name='robot' size={size} color={color} />
              </View>
            );
          },
          tabBarLabelStyle: {
            position: "relative",
            bottom: 15,
            fontSize: 10, // adjust this value
          },
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='person' size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default tabroot;
