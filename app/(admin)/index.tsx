import React, { useMemo, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import data from "../Data/admin/random_recruiters.json";
import { Ionicons } from "@expo/vector-icons";
import Recuiters_card from '../Card_design/recruiters_card'
const index = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchFilter = useMemo(() => {
      if (searchQuery === "") {
        return data;
      }
      return data.filter((item) => {
        return (
          item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }, [searchQuery]);
  return (
    <View className='flex-1 items-center justify-center'>
      {/* Search Section */}
      <View className='px-4 py-4 bg-white w-full border-b border-purple-100'>
        <View className='flex-row items-center bg-purple-50 rounded-xl h-12 px-3'>
          <Ionicons name='search' size={20} color='#000000' />
          <TextInput
            placeholder='Search Recruiters...'
            className='flex-1 ml-3 text-sm font-medium'
            placeholderTextColor='#9598a6'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Ionicons name='close-circle-outline' size={18} color='#3c2f5b' />
        </View>
      </View>

      {/* main content */}
      {/* List */}
      <FlatList
        data={searchFilter}
        className='mt-4 w-full px-4'
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Recuiters_card item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
