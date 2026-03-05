import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const report = () => {
    const [activeTab , setActiveTab] = useState('users');
  return (
    <View className='flex-1 bg-gray-100 p-4'>
      {/* Tabs */}
      <View className='flex-row bg-gray-200 rounded-full p-1 mb-4'>
        {/* Users Tab */}
        <TouchableOpacity
          onPress={() => setActiveTab("users")}
          className={`flex-1 py-2 items-center rounded-full ${
            activeTab === "users" ? "bg-white" : ""
          }`}
        >
          <Text
            className={`${
              activeTab === "users"
                ? "font-semibold text-gray-700"
                : "text-gray-500"
            }`}
          >
            By Users
          </Text>
        </TouchableOpacity>

        {/* Candidates Tab */}
        <TouchableOpacity
          onPress={() => setActiveTab("candidates")}
          className={`flex-1 py-2 items-center rounded-full ${
            activeTab === "candidates" ? "bg-white" : ""
          }`}
        >
          <Text
            className={`${
              activeTab === "candidates"
                ? "font-semibold text-gray-700"
                : "text-gray-500"
            }`}
          >
            By Candidates
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View className='flex-row justify-between mb-4 p-3'>
        {/* Total Active */}
        <View className='bg-white rounded-2xl p-4 w-[48%] shadow'>
          <Text className='text-xs text-gray-400'>TOTAL ACTIVE</Text>

          <Text className='text-2xl font-bold text-gray-800 mt-1'>0</Text>

          {/* <Text className='text-green-500 text-xs mt-1'>
            +12.4% vs last month
          </Text> */}
        </View>

        {/* New Signups */}
        <View className='bg-white rounded-2xl p-4 w-[48%] shadow'>
          <Text className='text-xs text-gray-400'>NEW SIGNUPS</Text>

          <Text className='text-2xl font-bold text-gray-800 mt-1'>0</Text>

          {/* <Text className='text-green-500 text-xs mt-1'>+5.2% this week</Text> */}
        </View>
      </View>

      {/* Activity Trends */}
      <View className='bg-white rounded-2xl p-5 mb-4 shadow'>
        <View className='flex-row justify-between items-center'>
          <Text className='text-lg font-semibold text-gray-800'>
            Activity Trends
          </Text>

          <Text className='text-xs bg-gray-200 px-2 py-1 rounded'>WEEKLY</Text>
        </View>

        <Text className='text-xs text-gray-400 mb-3'>
          Last 7 days performance
        </Text>

        <Text className='text-3xl font-bold text-purple-900'>
          0%
          <Text className='text-sm text-gray-400'> Retention</Text>
        </Text>

        {/* Simple Chart Bars */}
        <View className='flex-row justify-between mt-6 items-end h-50'>
          <View className='w-6 bg-gray-300 h-10 rounded' />
          <View className='w-6 bg-gray-300 h-14 rounded' />
          <View className='w-6 bg-purple-900 h-20 rounded' />
          <View className='w-6 bg-gray-300 h-16 rounded' />
          <View className='w-6 bg-gray-300 h-8 rounded' />
          <View className='w-6 bg-gray-300 h-6 rounded' />
          <View className='w-6 bg-gray-300 h-12 rounded' />
        </View>
      </View>

      {/* Detailed Breakdown */}
      <Text className='text-gray-500 text-xs mb-3'>DETAILED BREAKDOWN</Text>

      {/* Verified Profiles */}
      <View className='bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow'>
        <View>
          <Text className='font-semibold text-gray-700'>Verified Profiles</Text>

          <Text className='text-xs text-gray-400'>8,421 total</Text>
        </View>

        <Text className='font-bold text-gray-700'>0%</Text>
      </View>

      {/* Engagement */}
      <View className='bg-white rounded-2xl p-4 mb-6 flex-row justify-between items-center shadow'>
        <View>
          <Text className='font-semibold text-gray-700'>Avg. Engagement</Text>

          <Text className='text-xs text-gray-400'>Per user session</Text>
        </View>

        <Text className='font-bold text-gray-700'>0m</Text>
      </View>

      {/* Button */}
      <TouchableOpacity className='bg-purple-900 py-4 rounded-2xl items-center'>
        <Text className='text-white font-semibold text-base'>
          Generate Full Report
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default report;
