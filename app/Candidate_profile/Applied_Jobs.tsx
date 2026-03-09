import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import Candidate_applied_jobs from "../Card_design/Candidate_Applied_Job";
import data from "../Data/candidate_Applied_Jobs.json";

const Applied_Jobs = () => {
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

      {/* List */}
      <FlatList
        data={searchFilter}
        className='mt-4 '
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Candidate_applied_jobs item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "20%" }}
      />
    </View>
  );
};

export default Applied_Jobs;
