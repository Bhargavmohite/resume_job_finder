import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

const recruiters_card = ({ item }) => {
  return (
    <View className='bg-white p-4 mb-3 rounded-2xl flex-row items-center justify-between shadow'>
      {/* Left Section */}
      <View className='flex-row items-center'>
        {/* Avatar */}
        <View className='relative'>
          <Image
            source={{ uri: item.image }}
            resizeMode='cover'
            className='w-12 h-12 rounded-full'
          />

          {/* Status Dot */}
          <View
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-white ${
              item.status === "Active" ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </View>

        {/* Name + Role */}
        <View className='ml-3'>
          <Text className='font-semibold text-gray-800 text-base'>
            {item.name}
          </Text>

          <View className='flex-row items-center mt-1'>
            {/* Role Badge */}
            <Text className='text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700'>
              {item.role}
            </Text>

            {/* Status */}
            <Text
              className={`ml-3 text-sm ${
                item.status === "Active" ? "text-green-600" : "text-gray-400"
              } `}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={()=> Alert.alert('Alert','Updates Coming Soon')} className='bg-gray-100 px-4 py-2 rounded-full'>
        <Text className='text-gray-700 font-medium'>View Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default recruiters_card;
