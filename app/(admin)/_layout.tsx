import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const tabroot = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Entypo name='users' size={24} color='black' />;
          },
          title: "Recruits",
        }}
      />
      <Tabs.Screen
        name='candidate'
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <FontAwesome6 name='users' size={24} color='black' />;
          },
          title: "Candidates",
        }}
      />
      <Tabs.Screen
        name='report'
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name='bar-chart' size={24} color='black' />;
          },
          title: "Reports",
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name='settings' size={24} color='black' />;
          },
          title: "Settings",
        }}
      />
    </Tabs>
  );
};

export default tabroot;
