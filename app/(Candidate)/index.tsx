import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import data from "../Data/Random.json";

const index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilter = useMemo(() => {
    if (searchQuery === "") {
      return data;
    }
    return data.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]); 

  return (
    <View className='flex items-center justify-center'>
      {/* SEARCH SECTION */}
      <View className='px-4 py-4 bg-white w-full border-b border-purple-100'>
        <View className='flex-row items-center bg-purple-50 rounded-xl h-12 px-3'>
          <Ionicons name='search' size={20} color='#000000' />
          <TextInput
            placeholder='Search jobs, roles or companies...'
            className='flex-1 ml-3 text-sm font-medium'
            placeholderTextColor='#9598a6'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Ionicons name='close-circle-outline' size={18} color='#3c2f5b' />
        </View>
      </View>

      {/* main content */}
      <FlatList
        data={searchFilter}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='px-4 py-5 mb-5'>
            <View className='bg-white rounded-xl p-4 border border-purple-100 shadow-sm'>
              <View className='flex-row justify-between mb-3'>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  className='w-14 h-14 rounded-xl border border-purple-200 mr-3'
                />
                <View className='flex-1 pr-2'>
                  <Text className='font-bold text-base text-[#3c2f5b]'>
                    {item.title}
                  </Text>
                  <Text className='text-xs text-gray-400 font-medium'>
                    {item.company}
                  </Text>
                </View>

                <Entypo name='bookmark' size={22} color='#d1d5db' />
              </View>

              {(item.description ?? "").length > 100 ? (
                <Text className='text-sm text-gray-500 mb-3'>
                  {item.description!.slice(0, 50)}...
                </Text>
              ) : (
                <Text className='text-sm text-gray-500 mb-3'>
                  {item.description}
                </Text>
              )}

              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='px-2 py-1 bg-green-100 rounded'>
                    <Text className='text-[10px] font-bold text-green-600'>
                      {item.match}
                    </Text>
                  </View>
                  <Text className='text-[10px] text-gray-400 font-medium ml-1'>
                    {item.time}
                  </Text>
                </View>

                <TouchableOpacity className='bg-[#3c2f5b] px-5 py-2 rounded-lg'>
                  <Text className='text-white text-sm font-bold'>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <Text className='text-sm text-gray-400 mt-2 ml-1'>
        {searchFilter.length} Jobs Found
      </Text>
    </View>
  );
};

export default index;
