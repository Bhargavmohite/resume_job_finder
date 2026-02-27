import { Tabs } from "expo-router";
import React from "react";

const tabroot = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' options={{ headerShown: false }} />
    </Tabs>
  );
};

export default tabroot;
