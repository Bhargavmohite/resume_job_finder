import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";

const genrative_ai = () => {
  const [filename, setFilename] = useState("File is not uploaded");
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.canceled === false) {
        setFilename(result.assets[0].name);
      }

    } catch (error) {
       console.error(error);
    }
    
  }; 
  
  const startInterview = () => {
    // Logic to start the interview process
    Alert.alert("Interview session ", "Updates will be available soon!");
  };

  const removeFile = () => {
    Alert.alert(
      "Remove File",
      "Are you sure you want to remove the selected file?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => setFilename("File is not uploaded") },
      ]);
    
  };
  return (
    <View className='flex-1'>
      {/* step 1 */}
      <View className='px-4 py-5'>
        <Text className='text-black font-bold relative left-3 '>
          Step 1 : Upload Your Resume
        </Text>
        <View className='h-[300px] w-[300px] rounded-xl shadow-lg bg-blue-50 p-3 justify-between items-center relative left-1/2 -translate-x-1/2 mt-5'>
          {/* Header */}
          <TouchableOpacity onPress={pickDocument} className='w-full h-full'>
            <View className='flex-1 w-full border-2 border-dashed border-blue-600 rounded-xl justify-center items-center'>
              <Ionicons name='cloud-upload-outline' size={80} color='black' />
              <Text className='text-black text-center mt-2'>
                Browse File to upload!
              </Text>
            </View>
            {/* Footer */}
            <TouchableOpacity
              onPress={removeFile}
              className='w-full h-10 bg-blue-100 rounded-xl px-3 mt-3 flex-row items-center justify-end'
            >
              <Ionicons
                name='document-outline'
                size={22}
                color='royalblue'
                style={{ marginRight: 8 }}
              />
              <Text className='flex-1 text-center text-black'>{filename}</Text>
              <Ionicons name='trash-outline' size={22} color='black' />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      {/* step 2 */}
      <View className='px-4 py-5'>
        <Text className='text-black font-bold relative left-3 '>
          Step 2 : Attend the Interview
        </Text>
        <TouchableOpacity
          onPress={startInterview}
          className='w-[300px] h-[60px] mt-5 bg-blue-100 rounded-xl px-3 flex-row items-center justify-end shadow-lg relative left-1/2 -translate-x-1/2'
        >
          <Ionicons
            name='videocam'
            size={22}
            color='royalblue'
            style={{ marginRight: 8 }}
          />
          <Text className='flex-1 text-center text-black'>Start Interview</Text>
        </TouchableOpacity>
      </View>
      <View className='px-4 py-5'>
        <Text className='text-black font-bold relative left-3'>
          Step 3 : Get Scores
        </Text>
      </View>
    </View>
  );
};

export default genrative_ai;
