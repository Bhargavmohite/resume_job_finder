import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Recruiter_Home = ({item}) => {
  return (
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
          <Text className='text-sm text-gray-500 mb-3'>{item.description}</Text>
        )}

        <View className='flex-row justify-between items-center'>
          <View className='flex-row items-center space-x-2'>
            {/* <View className='px-2 py-1 bg-green-100 rounded'>
                    <Text className='text-[10px] font-bold text-green-600'>
                      {item.match}
                    </Text>
                  </View> */}
            <Text className='text-[10px] text-gray-400 font-medium ml-1'>
              {item.time}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert("Alert", "Updates Coming Soon")}
            className='bg-[#3c2f5b] px-5 py-2 rounded-lg'
          >
            <Text className='text-white text-sm font-bold'>See</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Recruiter_Home