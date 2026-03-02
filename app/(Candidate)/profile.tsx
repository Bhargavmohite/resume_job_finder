import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const profile = () => {
  return (
    <View className='flex-1 bg-gray-100'>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className='bg-white px-5 pt-10 pb-5'>
          <View className='flex-row items-center'>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg",
              }}
              className='w-20 h-20 rounded-full'
            />

            <View className='ml-4 flex-1'>
              <Text className='text-xl font-bold text-gray-900'>
                Alex Johnson
              </Text>
              <Text className='text-gray-500 text-sm mt-1'>
                Bca at XYZ University
              </Text>
              <Text className='text-gray-400 text-sm mt-1'>student</Text>
            </View>
          </View>

          {/* Buttons */}
          <View className='flex-row mt-5  gap-3'>
            <TouchableOpacity className='flex-1 border border-gray-300 py-3 rounded-xl items-center bg-white'>
              <Text className='text-gray-700 font-semibold'>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex-1 border border-gray-300 py-3 rounded-xl items-center bg-white'>
              <Text className='text-gray-700 font-semibold'>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default profile;
