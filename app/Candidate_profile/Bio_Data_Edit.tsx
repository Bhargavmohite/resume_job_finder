import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Bio_Data_Edit = () => {
  const [education, setEducation] = useState([ { degree: "", college: "", year: "", cgpa: "" },]);
  const [skills, setSkills] = useState([{ language: "", tools: "" }]);
  const [projects, setProjects] = useState([{ title: "", tech: "", desc: "" }]);
  const [experience, setExperience] = useState([{ company: "", role: "", duration: "" },]);
  const [certifications, setCertifications] = useState([""]);
  const [achievements, setAchievements] = useState([""]);

  const addEducation = () => { setEducation([...education,{ degree: "", college: "", year: "", cgpa: "" },]);};

  const addSkill = () => {
    setSkills([...skills, { language: "", tools: "" }]);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", tech: "", desc: "" }]);
  };

  const addExperience = () => {
    setExperience([...experience, { company: "", role: "", duration: "" }]);
  };

  const addCertification = () => {
    setCertifications([...certifications, ""]);
  };

  const addAchievement = () => {
    setAchievements([...achievements, ""]);
  };



const removeEducation = () => {
  if (education.length > 1) {
    setEducation(education.slice(0, -1));
  }
};

const removeSkill = () => {
  if (skills.length > 1) {
    setSkills(skills.slice(0, -1));
  }
};

const removeProject = () => {
  if (projects.length > 1) {
    setProjects(projects.slice(0, -1));
  }
};

const removeExperience = () => {
  if (experience.length > 1) {
    setExperience(experience.slice(0, -1));
  }
};

const removeCertification = () => {
  if (certifications.length > 1) {
    setCertifications(certifications.slice(0, -1));
  }
};

const removeAchievement = () => {
  if (achievements.length > 1) {
    setAchievements(achievements.slice(0, -1));
  }
};




  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className='flex-1 bg-gray-100 px-5 pt-10'
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <View className='bg-white p-5 rounded-2xl shadow mb-5'>
        {/* Personal Information */}
        <Text className='text-lg font-semibold mb-3'>Personal Information</Text>

        <TextInput
          placeholder='Phone Number'
          className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
        />

        <TextInput
          placeholder='Email'
          className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
        />

        <TextInput
          placeholder='Location'
          className='border border-gray-300 rounded-lg px-4 py-3 mb-5'
        />

        {/* Career Objective */}
        <Text className='text-lg font-semibold mb-3'>Career Objective</Text>

        <TextInput
          placeholder='Write your career objective'
          multiline
          className='border border-gray-300 rounded-lg px-4 py-3 mb-5'
        />

        {/* Education */}
        <View className='flex-row justify-between items-center mb-3 p-3'>
          <Text className='text-lg font-semibold'>Education</Text>
          <View className='flex-row gap-2'>
            <TouchableOpacity onPress={addEducation}>
              <Text className='text-primary-500 text-x'>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeEducation}>
              <Text className='text-primary-500 text-x'>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {education.map((item, index) => (
          <View key={index} className='mb-5'>
            <TextInput
              placeholder='Degree / Course'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='College / University'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Year of Completion'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='CGPA / Percentage'
              className='border border-gray-300 rounded-lg px-4 py-3'
            />
          </View>
        ))}

        {/* Technical Skills */}
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-semibold'>Technical Skills</Text>
          <View className='flex-row gap-2'>
            <TouchableOpacity onPress={addSkill}>
              <Text className='text-primary-500 '>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeSkill}>
              <Text className='text-primary-500 '>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {skills.map((item, index) => (
          <View key={index} className='mb-5'>
            <TextInput
              placeholder='Programming Languages'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Tools / Technologies'
              className='border border-gray-300 rounded-lg px-4 py-3'
            />
          </View>
        ))}

        {/* Projects */}
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-semibold'>Projects</Text>
          <View className='flex-row gap-2'>
            <TouchableOpacity onPress={addProject}>
              <Text className='text-primary-500 '>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeProject}>
              <Text className='text-primary-500 '>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {projects.map((item, index) => (
          <View key={index} className='mb-5'>
            <TextInput
              placeholder='Project Title'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Technologies Used'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Project Description'
              multiline
              className='border border-gray-300 rounded-lg px-4 py-3'
            />
          </View>
        ))}

        {/* Work Experience */}
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-semibold'>Work Experience</Text>
          <View className='flex-row gap-2'>
            <TouchableOpacity onPress={addExperience}>
              <Text className='text-primary-500 '>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeExperience}>
              <Text className='text-primary-500 '>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {experience.map((item, index) => (
          <View key={index} className='mb-5'>
            <TextInput
              placeholder='Company Name'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Role / Position'
              className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
            />

            <TextInput
              placeholder='Duration'
              className='border border-gray-300 rounded-lg px-4 py-3'
            />
          </View>
        ))}

        {/* Certifications */}
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-semibold'>Certifications</Text>
          <View className='flex-row gap-2'>
            <TouchableOpacity onPress={addCertification}>
              <Text className='text-primary-500 '>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeCertification}>
              <Text className='text-primary-500 '>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {certifications.map((item, index) => (
          <TextInput
            key={index}
            placeholder='Add Certification'
            className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
          />
        ))}

        {/* Achievements */}
        <View className='flex-row justify-between items-center mb-3'>
          <Text className='text-lg font-semibold'>Achievements</Text>
          <View className='flex-row gap-2'></View>
          <TouchableOpacity onPress={addAchievement}>
            <Text className='text-primary-500 '>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeAchievement}>
            <Text className='text-primary-500 '>Remove</Text>
          </TouchableOpacity>
        </View>

        {achievements.map((item, index) => (
          <TextInput
            key={index}
            placeholder='Add Achievement'
            className='border border-gray-300 rounded-lg px-4 py-3 mb-3'
          />
        ))}

        {/* Submit Button */}
        <TouchableOpacity className='bg-[#F5F5F5] p-4 rounded-xl items-center mt-5'>
          <Text className='text-primary-50 font-semibold text-lg'>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Bio_Data_Edit;
