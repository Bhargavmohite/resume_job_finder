import React from "react";
import { Text, View } from "react-native";

const Bio_Data = ({ item }) => {
  return (
    <View className='pb-20'>
      {/* Personal Information */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Personal Information</Text>
        <View className='gap-2 mt-2'>
          <Text className='text-gray-500'>
            Phone: {item.personalInformation.phone}
          </Text>
          <Text className='text-gray-500'>
            Email: {item.personalInformation.email}
          </Text>
          <Text className='text-gray-500'>
            Location: {item.personalInformation.location}
          </Text>
        </View>
      </View>

      {/* Career Objective */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Career Objective</Text>
        <Text className='text-gray-500 mt-2 leading-5'>
          {item.careerObjective}
        </Text>
      </View>

      {/* Education */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Education</Text>
        <View className='gap-2 mt-2'>
          <Text className='text-gray-500'>{item.education.degree}</Text>
          <Text className='text-gray-500'>{item.education.college}</Text>
          <Text className='text-gray-500'>Year: {item.education.year}</Text>
          <Text className='text-gray-500'>CGPA: {item.education.cgpa}</Text>
        </View>
      </View>

      {/* Technical Skills */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Technical Skills</Text>
        <View className='gap-2 mt-2'>
          <Text className='text-gray-500'>
            Programming: {item.technicalSkills.programmingLanguages.join(", ")}
          </Text>

          <Text className='text-gray-500'>
            Tools: {item.technicalSkills.toolsTechnologies.join(", ")}
          </Text>
        </View>
      </View>

      {/* Projects */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Projects</Text>

        {item.projects.map((project, index) => (
          <View key={index} className='gap-1 mt-2'>
            <Text className='text-gray-500'>{project.title}</Text>

            <Text className='text-gray-500'>
              Tech: {project.technologies.join(", ")}
            </Text>

            <Text className='text-gray-500 leading-5'>
              {project.description}
            </Text>
          </View>
        ))}
      </View>

      {/* Work Experience */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>
          Work Experience / Internship
        </Text>

        {item.workExperience.map((work, index) => (
          <View key={index} className='gap-1 mt-2'>
            <Text className='text-gray-500'>Company: {work.company}</Text>
            <Text className='text-gray-500'>Role: {work.role}</Text>
            <Text className='text-gray-500'>Duration: {work.duration}</Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Certifications</Text>

        {item.certifications.map((cert, index) => (
          <Text key={index} className='text-gray-500 mt-2'>
            {cert}
          </Text>
        ))}
      </View>

      {/* Achievements */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Achievements</Text>

        {item.achievements.map((ach, index) => (
          <Text key={index} className='text-gray-500 mt-2'>
            {ach}
          </Text>
        ))}
      </View>

      {/* Languages */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Languages</Text>

        <Text className='text-gray-500 mt-2'>{item.languages.join(", ")}</Text>
      </View>

      {/* Hobbies */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Hobbies / Interests</Text>

        <Text className='text-gray-500 mt-2'>{item.hobbies.join(", ")}</Text>
      </View>

      {/* Strengths */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Strengths</Text>

        <Text className='text-gray-500 mt-2'>{item.strengths.join(", ")}</Text>
      </View>

      {/* Links */}
      <View className='mt-6'>
        <Text className='font-semibold text-lg'>Links</Text>

        <Text className='text-gray-500 mt-2'>
          Portfolio: {item.links.portfolio}
        </Text>

        <Text className='text-gray-500'>GitHub: {item.links.github}</Text>

        <Text className='text-gray-500'>LinkedIn: {item.links.linkedin}</Text>
      </View>
    </View>
  );
};

export default Bio_Data;
