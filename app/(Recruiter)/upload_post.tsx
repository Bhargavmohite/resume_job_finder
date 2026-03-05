import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const upload_post = () => {
    const [formdata,setFormdata] = useState({
        Companyname:"",
        Position:"",
        location:"",
        work_type:"",
        emailID:"",
        Decription:"",
        experience:"",
        salary:"",
        skills:"",
    });
  return (
    <KeyboardAvoidingView
      className='flex-1 bg-gray-100'
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <View className='px-5 py-3 bg-white border-b border-gray-200'>
        <Text className='text-bold text-xl text-center'>Upload Job Post</Text>
      </View>
      <ScrollView
        className='flex-1 bg-gray-100 p-5'
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ paddingBottom: 190 }}
      >
        <View className='bg-white p-6 rounded-2xl shadow-sm'>
          {/* Company Name */}
          <Text className='text-gray-600 mb-1'>Company Name</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='briefcase' size={18} color='gray' />
            <TextInput
              placeholder='Enter company name'
              className='flex-1 p-3'
              value={formdata.Companyname}
              onChangeText={(text) =>
                setFormdata({ ...formdata, Companyname: text })
              }
            />
          </View>

          {/* Position */}
          <Text className='text-gray-600 mb-1'>Position</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='user' size={18} color='gray' />
            <TextInput
              placeholder='Enter position'
              className='flex-1 p-3'
              value={formdata.Position}
              onChangeText={(text) =>
                setFormdata({ ...formdata, Position: text })
              }
            />
          </View>

          {/* Location */}
          <Text className='text-gray-600 mb-1'>Location</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='map-pin' size={18} color='gray' />
            <TextInput
              placeholder='Enter location'
              className='flex-1 p-3'
              value={formdata.location}
              onChangeText={(text) =>
                setFormdata({ ...formdata, location: text })
              }
            />
          </View>

          {/* Email */}
          <Text className='text-gray-600 mb-1'>Email ID</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='mail' size={18} color='gray' />
            <TextInput
              placeholder='Enter email'
              className='flex-1 p-3'
              keyboardType='email-address'
              value={formdata.emailID}
              onChangeText={(text) =>
                setFormdata({ ...formdata, emailID: text })
              }
            />
          </View>

          {/* Description */}
          <Text className='text-gray-600 mb-1'>Description</Text>
          <View className='bg-gray-100 rounded-lg px-3 mb-4'>
            <TextInput
              placeholder='Write job description...'
              multiline
              numberOfLines={4}
              className='p-3 text-gray-700'
              value={formdata.Decription}
              onChangeText={(text) =>
                setFormdata({ ...formdata, Decription: text })
              }
            />
          </View>

          {/* Experience */}
          <Text className='text-gray-600 mb-1'>Experience</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='award' size={18} color='gray' />
            <TextInput
              placeholder='e.g. 2-5 Years'
              className='flex-1 p-3'
              value={formdata.experience}
              onChangeText={(text) =>
                setFormdata({ ...formdata, experience: text })
              }
            />
          </View>

          {/* Salary */}
          <Text className='text-gray-600 mb-1'>Salary</Text>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 mb-4'>
            <Feather name='dollar-sign' size={18} color='gray' />
            <TextInput
              placeholder='Enter salary range'
              className='flex-1 p-3'
              value={formdata.salary}
              onChangeText={(text) =>
                setFormdata({ ...formdata, salary: text })
              }
            />
          </View>

          {/* Skills */}
          <Text className='text-gray-600 mb-1'>Skills</Text>
          <View className='bg-gray-100 rounded-lg px-3 mb-4'>
            <TextInput
              placeholder='e.g. React, Node.js, MongoDB'
              className='p-3 text-gray-700'
              value={formdata.skills}
              onChangeText={(text) =>
                setFormdata({ ...formdata, skills: text })
              }
            />
          </View>

          {/* Upload Button */}
          <TouchableOpacity className='bg-[#3c2f5b] rounded-lg mt-4'>
            <Text className='text-white text-center py-3 font-bold'>
              Upload Job Post
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default upload_post