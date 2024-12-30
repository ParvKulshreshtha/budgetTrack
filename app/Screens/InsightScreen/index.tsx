import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import tw from 'twrnc';

function InsightsScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-yellow-50 p-4`}>
      {/* Insights Header */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-3xl font-semibold text-gray-800`}>Insights</Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          View your data insights and analytics here.
        </Text>
      </View>

      {/* Example of Insights Cards */}
      <View style={tw`bg-white p-4 rounded-xl shadow-md mt-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Daily Statistics</Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Total sales: $4,320
        </Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Active users: 234
        </Text>
      </View>

      {/* Button for More Insights */}
      <View style={tw`mt-6`}>
        <Button
          title="View Detailed Analytics"
          onPress={() => alert('View more insights')}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
}

export default InsightsScreen;
