import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Candidate_Applied_Job = ({ item }) => {

   const job_status = item.status?.toLowerCase();

   let bgColor = "bg-gray-100";
   let textColor = "text-gray-600";

   if (job_status === "applied") {
     bgColor = "bg-blue-100";
     textColor = "text-blue-700";
   } else if (job_status === "under review") {
     bgColor = "bg-yellow-100";
     textColor = "text-yellow-700";
   } else if (job_status === "shortlisted") {
     bgColor = "bg-green-100";
     textColor = "text-green-700";
   } else if (job_status === "rejected") {
     bgColor = "bg-red-100";
     textColor = "text-red-700";
   }



    if (job_status === "applied") {

        return
    }
  return (
    <View className='p-2 mb-5'>
      <View className='px-4 py-3 mb-3'>
        <View className='bg-white rounded-xl p-4 border border-purple-100 shadow-sm'>
          <View className='flex-row justify-between mb-3'>
            <Image
              source={{ uri: item.image }}
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

            <Entypo name='briefcase' size={22} color='#d1d5db' />
          </View>

          {(item.description ?? "").length > 100 ? (
            <Text className='text-sm text-gray-500 mb-3'>
              {item.description.slice(0, 50)}...
            </Text>
          ) : (
            <Text className='text-sm text-gray-500 mb-3'>
              {item.description}
            </Text>
          )}

          <View className='flex-row justify-between items-center'>
            <View className='flex-row items-center'>
              <Text className='text-[10px] text-gray-400 font-medium'>
                Applied {item.appliedDate}
              </Text>
            </View>

            <View className={`px-2 py-1 rounded-full ${bgColor}`}>
              <Text className={`text-[10px] font-medium ${textColor}`}>
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Candidate_Applied_Job;
