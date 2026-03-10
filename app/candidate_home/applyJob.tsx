import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import jobdetails from "../Data/candidate/candidate_applyjob.json";

const applyJob = () => {
  const { id } = useLocalSearchParams();

  const job = jobdetails.find((item) => item.id === Number(id));

  const {
    title,
    company,
    logo,
    mode,
    posted,
    email,
    experience,
    salary,
    description,
    location,
    skills,
  } = job || {};

  return (
    <ScrollView className='flex-1 bg-gray-100 py-6'>
      <View className='p-5 mt-13 mb-3'>
        {/* Job Card */}
        <View className='bg-white rounded-2xl p-5 shadow-md space-y-2'>
          {/* Company */}
          <View className='flex-row items-center mb-4'>
            <Image
              source={{
                uri: logo,
              }}
              className='w-14 h-14 rounded-xl mr-3'
            />
            <View>
              <Text className='text-lg font-bold text-gray-900'>{company}</Text>
            </View>
          </View>

          {/* Position */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Position</Text>
            <Text className='text-base font-semibold'>{title}</Text>
          </View>

          {/* Time */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Posted</Text>
            <Text className='text-base text-gray-900'>{posted}</Text>
          </View>

          {/* Mode */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Mode</Text>
            <Text className='text-base text-gray-900'>{mode}</Text>
          </View>

          {/* Mode */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>location</Text>
            <Text className='text-base text-gray-900'>{location || "N/A"}</Text>
          </View>

          {/* Email */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Email</Text>
            <Text className='text-base text-gray-900'>{email}</Text>
          </View>

          {/* Experience */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Experience</Text>
            <Text className='text-base text-gray-900'>{experience}</Text>
          </View>

          {/* Salary */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Salary</Text>
            <Text className='text-base text-gray-900'>{salary}</Text>
          </View>

          {/* Description */}
          <View className='mb-3'>
            <Text className='text-sm text-gray-500'>Description</Text>
            <Text className='text-base text-gray-700'>{description}</Text>
          </View>

          {/* Skills */}
          <View className='mb-5'>
            <Text className='text-sm text-gray-500 mb-1'>Skills</Text>
            <Text className='text-base text-gray-900'>
              {skills.map((skill, index) => {
                return <Text key={index}>{skill}, </Text>;
              })}
            </Text>
          </View>

          {/* Buttons */}
          <View className='flex-row justify-between mt-2'>
            <TouchableOpacity className='flex-1 bg-blue-600 py-3 rounded-xl mr-2'>
              <Text className='text-center text-white font-semibold'>
                Apply
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

export default applyJob;
