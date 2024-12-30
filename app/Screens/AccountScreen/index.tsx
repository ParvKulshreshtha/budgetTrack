import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import tw from 'twrnc';

function AccountsScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-purple-50 p-4`}>
      {/* Accounts Header */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-3xl font-semibold text-gray-800`}>Your Accounts</Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Manage your linked accounts and payment methods here.
        </Text>
      </View>

      {/* Accounts List */}
      <View style={tw`bg-white p-4 rounded-xl shadow-md mt-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Bank Account</Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Bank Name: XYZ Bank
        </Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Account Number: **** 1234
        </Text>
        <Button
          title="Edit Account"
          onPress={() => alert('Edit bank account details')}
          color="#4CAF50"
        />
      </View>

      <View style={tw`bg-white p-4 rounded-xl shadow-md mt-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Credit Card</Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Card Type: Visa
        </Text>
        <Text style={tw`text-lg text-gray-600 mt-2`}>
          Expiry Date: 12/24
        </Text>
        <Button
          title="Edit Card"
          onPress={() => alert('Edit credit card details')}
          color="#4CAF50"
        />
      </View>

      {/* Add New Account Button */}
      <View style={tw`mt-6`}>
        <Button
          title="Add New Account"
          onPress={() => alert('Add a new account')}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
}

export default AccountsScreen;
