import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../redux/userSlice';
import { Redirect } from 'expo-router';

export default function Index() {
  const [input, setInput] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch()
  const user = useSelector((state:any)=>state.user)


  // Function to toggle bottom sheet visibility
  const openBottomSheet = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const handleLogin = () => {
    // Handle login logic here with the phoneNumber
    console.log('Logging in with phone number:', user);
    dispatch(setLoggedIn(phoneNumber))
    
  };

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
    {user.phoneNumber ?
      <Redirect href={"/home"} /> :
      <View style={tw`flex-1`}>
        <Image source={require("./../../assets/images/onboarding.jpg")} style={tw`w-full h-full`} />
        <View style={tw`absolute bottom-0 w-full bg-blue-500 rounded-t-3xl p-4`}>
          <TouchableOpacity
            style={tw`ml-1/4`}
            onPress={openBottomSheet}
          >
            <Text style={tw`text-white text-center text-lg`}>Login</Text>
          </TouchableOpacity>

          <View style={tw`${isOpen ? "p-4" : "hidden"}`}>
            <TextInput
              style={tw`bg-white p-2 rounded mb-4`}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity
              style={tw`bg-white p-2 rounded`}
              onPress={handleLogin}
            >
              <Text style={tw`text-blue-500 text-center`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>}
    </GestureHandlerRootView>
  );
}
