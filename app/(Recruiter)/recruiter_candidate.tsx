import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import CandidateCard from "../Card_design/Recruiter_candidate_card";
import Data from "../Data/random_candidates.json";

const Recruiter_candidate = () => {
  const [search, setSearch] = useState("");

  const filtered = Data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <View className='flex-1 justify-center items-center bg-background'>
      {/* Search Section */}
      <View className='px-4 py-4 bg-white w-full border-b border-purple-100'>
        <View className='flex-row items-center bg-purple-50 rounded-xl h-12 px-3'>
          <Ionicons name='search' size={20} color='#000000' />
          <TextInput
            placeholder='Search jobs, roles or companies...'
            className='flex-1 ml-3 text-sm font-medium'
            placeholderTextColor='#9598a6'
            value={search}
            onChangeText={setSearch}
          />
          <Ionicons name='close-circle-outline' size={18} color='#3c2f5b' />
        </View>
      </View>

      {/* List */}
      <FlatList
        data={filtered}
        className='mt-4 '
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CandidateCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Recruiter_candidate;
