import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const tabroot = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{ headerShown: false }} />
    </Tabs>
  )
}

export default tabroot