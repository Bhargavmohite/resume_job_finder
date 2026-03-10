import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import recuiterCandidate from "../Data/recruiter/Recruiter_candidates.json";

const recruiter_candidates = () => {
  const { id } = useLocalSearchParams();

  const candidates = recuiterCandidate.find((item) => item.id === Number(id));

  const { image, name, title, experience, emailid, phoneno, filename ,location } =
    candidates || {};

  return ( 
    <ScrollView className='flex-1 bg-gray-100 py-6'>
      <View className='p-5 mt-13 mb-3'>
        {/* Job Card */}
        <View className='bg-white rounded-2xl p-5 shadow-md space-y-2'>
          {/* Company */}
          <View className='flex-row items-center mb-4'>
            <Image
              source={{
                uri: image,
              }}
              className='w-14 h-14 rounded-xl mr-3'
            />
            <View>
              <Text className='text-lg font-bold text-gray-900'>{name}</Text>
            </View>
          </View>

          {/* Position */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Title</Text>
            <Text className='text-base font-semibold'>{title || 'n/a'}</Text>
          </View>

          {/* Time */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Expeirence</Text>
            <Text className='text-base text-gray-900'>{experience}</Text>
          </View>

          {/* Mode */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Email ID</Text>
            <Text className='text-base text-gray-900'>{emailid}</Text>
          </View>

          {/* Mode */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Phone No.</Text>
            <Text className='text-base text-gray-900'>{phoneno}</Text>
          </View>

          {/* Email */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>location</Text>
            <Text className='text-base text-gray-900'>{location}</Text>
          </View>

          {/* Experience */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Resume</Text>
            <Text className='text-base text-gray-900'>📄 {filename}</Text>
          </View>

          {/* Buttons */}
          <View className='flex-row justify-between mt-2'>
            <TouchableOpacity className='flex-1 bg-blue-600 py-3 rounded-xl mr-2'>
              <Text className='text-center text-white font-semibold'>
                Message
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex-1 bg-gray-200 py-3 rounded-xl ml-2'>
              <Text className='text-center font-semibold text-gray-900'>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default recruiter_candidates;
