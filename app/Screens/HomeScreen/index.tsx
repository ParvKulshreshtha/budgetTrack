import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';

function HomeScreen() {
  const user = useSelector((state:any) => state?.user);

  return (
    <ScrollView style={tw`flex-1 bg-blue-50 p-4`}>
      {/* Header with User Info */}
      <View style={tw`flex-row items-center justify-between mb-6`}>
        <Image 
          source={{ uri: user?.profilePicture || 'https://via.placeholder.com/100' }}
          style={tw`w-16 h-16 rounded-full`}
        />
        <View style={tw`flex-1 ml-4`}>
          <Text style={tw`text-2xl font-semibold text-gray-800`}>Hello, {user?.name}!</Text>
          <Text style={tw`text-lg text-gray-600`}>Phone: {user?.phoneNumber}</Text>
        </View>
      </View>

      {/* Quick Stats or Overview Section */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Your Overview</Text>
        <View style={tw`flex-row justify-between mt-4`}>
          <View style={tw`bg-white p-4 rounded-xl shadow-md w-1/3`}>
            <Text style={tw`text-lg font-semibold text-gray-700`}>Balance</Text>
            <Text style={tw`text-xl text-gray-900`}>$1,250.00</Text>
          </View>
          <View style={tw`bg-white p-4 rounded-xl shadow-md w-1/3`}>
            <Text style={tw`text-lg font-semibold text-gray-700`}>Messages</Text>
            <Text style={tw`text-xl text-gray-900`}>5 New</Text>
          </View>
          <View style={tw`bg-white p-4 rounded-xl shadow-md w-1/3`}>
            <Text style={tw`text-lg font-semibold text-gray-700`}>Tasks</Text>
            <Text style={tw`text-xl text-gray-900`}>3 Pending</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Quick Actions</Text>
        <View style={tw`flex-row justify-between mt-4`}>
          <Button title="Edit Profile" onPress={() => alert("Go to Edit Profile")} />
          <Button title="View Activity" onPress={() => alert("View Activity")} />
        </View>
      </View>

      {/* Notifications Section */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Notifications</Text>
        <View style={tw`bg-white p-4 rounded-xl shadow-md mt-4`}>
          <Text style={tw`text-lg font-semibold text-gray-700`}>New Update Available!</Text>
          <Text style={tw`text-gray-600 mt-2`}>
            A new update is available for your app. Make sure to update to get the latest features.
          </Text>
        </View>
      </View>

      {/* Actionable Card */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Recent Activity</Text>
        <View style={tw`bg-white p-4 rounded-xl shadow-md mt-4`}>
          <Text style={tw`text-lg font-semibold text-gray-700`}>You have 2 unread messages</Text>
          <Button 
            title="View Messages" 
            onPress={() => alert("Go to Messages")} 
            color="#4CAF50" 
          />
        </View>
      </View>

      {/* Graphical Data Representation */}
      <View style={tw`bg-white p-4 rounded-xl shadow-md mt-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Usage Statistics</Text>
        {/* This could be a progress bar or a chart */}
        <View style={tw`mt-4`}>
          <Text style={tw`text-lg text-gray-600`}>Data Usage: 80%</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
