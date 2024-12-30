import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

function ProfileScreen() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [profilePicture, setProfilePicture] = useState(
    'https://via.placeholder.com/100'
  );

  return (
    <ScrollView style={tw`flex-1 bg-green-50 p-4`}>
      {/* Profile Header */}
      <View style={tw`flex-row items-center justify-between mb-6`}>
        <Image
          source={{ uri: profilePicture }}
          style={tw`w-16 h-16 rounded-full`}
        />
        <View style={tw`flex-1 ml-4`}>
          <Text style={tw`text-2xl font-semibold text-gray-800`}>Profile</Text>
          <Text style={tw`text-lg text-gray-600 mt-2`}>
            Update your profile information.
          </Text>
        </View>
      </View>

      {/* Profile Form */}
      <View style={tw`bg-white p-4 rounded-xl shadow-md mt-6`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>Full Name</Text>
        <TextInput
          style={tw`border p-2 rounded-xl mt-2 text-gray-700`}
          value={name}
          onChangeText={setName}
        />

        <Text style={tw`text-lg font-semibold text-gray-800 mt-4`}>Email</Text>
        <TextInput
          style={tw`border p-2 rounded-xl mt-2 text-gray-700`}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Button to Save Changes */}
      <View style={tw`mt-6`}>
        <Button
          title="Save Changes"
          onPress={() => alert('Profile updated successfully')}
          color="#4CAF50"
        />
      </View>

      {/* Button to Change Profile Picture */}
      <View style={tw`mt-6`}>
        <TouchableOpacity onPress={() => alert('Change Profile Picture')}>
          <Text style={tw`text-lg text-blue-600`}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
