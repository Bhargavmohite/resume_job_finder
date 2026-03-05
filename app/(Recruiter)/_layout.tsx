import { Entypo, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const tabroot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View>
                <Ionicons name='home' size={24} color='black' />
              </View>
            );
          },
          title: "Home",
        }}
      />
      <Tabs.Screen
        name='recruiter_candidate'
        options={{ headerShown: false ,tabBarIcon: () => {
          return(
          <View>
            <Entypo name='add-user' size={24} color='black' />
            </View>
        );
      },
        title: "Candidates",
      }}
      />
      <Tabs.Screen name='upload_post' options={{ headerShown: false , tabBarIcon: () => { 
        return (
          <View>
            <Entypo name='upload' size={24} color='black' />
          </View> 
        )
      },
        title: "Upload Post",
      }} />
      <Tabs.Screen name='recruiter_profile' options={{ headerShown: false , tabBarIcon: () => { 
        return (
        <Entypo name='user' size={24} color='black' />
      );
      },
        title: "Profile",
      }} />
    </Tabs>
  );
};

export default tabroot;
