import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

const recruiter_candidate_card = ({ item }) => {
  const matchValue = parseInt(item.match); // Assuming match is a number between 0 and 100
  let badgeBg = "bg-gray-200";
  let textColor = "text-gray-500";

  if (matchValue >= 80 && matchValue <= 100) {
    badgeBg = "bg-green-100";
    textColor = "text-green-600";
  } else if (matchValue >= 60 && matchValue <= 80) {
    badgeBg = "bg-yellow-100";
    textColor = "text-yellow-600";
  } else if (matchValue >= 20 && matchValue < 60) {
    badgeBg = "bg-gray-100";
    textColor = "text-gray-500";
  }

  return (
    <View className='bg-white relative  p-5 rounded-xl mb-4 mt-4 shadow-sm border border-gray-100'>
      {/* Top Section */}
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center'>
          <Image
            source={{ uri: item.avatar }}
            className='w-12 h-12 rounded-full mr-3'
          />

          <View>
            <Text className='font-bold text-gray-800 text-base'>
              {item.name}
            </Text>

            <Text className='text-gray-500 text-sm'>{item.role}</Text>

            <Text className='text-gray-400 text-xs'>
              {item.exp} • {item.location}
            </Text>
          </View>
        </View>

        {/* Match Badge */}
        <View className={`px-3 py-1 rounded-full ${badgeBg}`}>
          <Text className={`text-xs font-semibold ${textColor}`}>
            {matchValue}% Match
          </Text>
        </View>
      </View>

      {/* Resume */}
      <View className='flex-row items-center mt-4'>
        <Text className='text-gray-400 text-sm'>📄 {item.file}</Text>
      </View>

      {/* Bottom */}
      <View className='flex-row justify-between items-center mt-4'>
        <Text className='text-gray-400 text-xs'>{item.time}</Text>

        <TouchableOpacity
          onPress={() => Alert.alert("Alert", "Updates Coming Soon")}
          className='bg-purple-700 px-4 py-2 rounded-lg'
        >
          <Text className='text-white font-semibold text-sm'>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default recruiter_candidate_card;
