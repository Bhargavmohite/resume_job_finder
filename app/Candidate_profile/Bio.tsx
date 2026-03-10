import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Data from "../Data/candidate/candidate_profile.json";
import Bio_Data from "./Bio_Data";

const Bio = () => {
  return (
    <View className='flex-1 bg-gray-100 px-5  pt-20'>
      <View className='bg-white rounded-3xl p-6'>
        {/* Profile Image */}
        <View className='items-center -mt-16'>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/02/3f/f8/023ff8a889118ed652bfdf6a384e68f2.jpg",
            }}
            resizeMode='cover'
            className='w-28 h-28 rounded-full border-4 border-white'
          />
        </View>

        {/* Name */}
        <Text className='text-center text-xl font-bold mt-3'>Alex Johnson</Text>
      </View>
      {/* Stats */}
      <View className='flex-row justify-around mt-3 relative top-2 bg-white py-4 rounded-lg shadow'>
        <View className='items-center'>
          <Text className='text-lg font-bold'>0</Text>
          <Text className='text-gray-400'>Followers</Text>
        </View>

        <View className='items-center'>
          <Text className='text-lg font-bold'>0</Text>
          <Text className='text-gray-400'>Following</Text>
        </View>
      </View>
    <FlatList
      data={Data}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className='mb-4'>
          <Bio_Data item={item} />
        </View>
      )}
      className='mt-5 bg-white p-5 rounded-lg shadow pb-10'
    />
    </View>
  );
};

export default Bio;
