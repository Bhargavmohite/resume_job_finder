import { Feather } from "@expo/vector-icons";
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
        </View>
        <View className='px-5 pt-5 mt-5 relative bottom-5'>
          {/* Bio */}
          <TouchableOpacity className='flex-row items-center py-5 border-b border-gray-200'>
            <Feather name='user' size={22} color='gray' />
            <View className='ml-4 flex-1'>
              <Text className='text-lg font-semibold text-gray-800'>Bio</Text>
              <Text className='text-gray-500 text-sm'>
                You Can view your Bio
              </Text>
            </View>
          </TouchableOpacity>

          {/* Edit Profile */}
          <TouchableOpacity className='flex-row items-center py-5 border-b border-gray-200'>
            <Feather name='edit' size={22} color='gray' />
            <View className='ml-4 flex-1'>
              <Text className='text-lg font-semibold text-gray-800'>
                Edit Profile
              </Text>
              <Text className='text-gray-500 text-sm'>
                Change profile details
              </Text>
            </View>
          </TouchableOpacity>

          {/* Applied Jobs */}
          <TouchableOpacity className='flex-row items-center py-5 border-b border-gray-200'>
            <Feather name='briefcase' size={22} color='gray' />
            <View className='ml-4 flex-1'>
              <Text className='text-lg font-semibold text-gray-800'>
                Applied Jobs
              </Text>
              <Text className='text-gray-500 text-sm'>
                See jobs you applied for
              </Text>
            </View>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity className='flex-row items-center py-5 border-b border-gray-200'>
            <Feather name='settings' size={22} color='gray' />
            <View className='ml-4 flex-1'>
              <Text className='text-lg font-semibold text-gray-800'>
                Settings
              </Text>
              <Text className='text-gray-500 text-sm'>
                Manage app preferences
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default profile;
