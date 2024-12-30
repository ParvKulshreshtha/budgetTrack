import React, { useState, useRef } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import tw from "twrnc";
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function Index() {
  const [input, setInput] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle bottom sheet visibility
  const openBottomSheet = () => {
    // Expand to 100% when button is clicked
    setIsOpen(prevOpen => !prevOpen)
  };

  const closeBottomSheet = () => {
    // bottomSheetRef.current?.close();  // Close the sheet when needed
  };

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <View style={tw`flex-1`}>
        <Image source={require("./../../assets/images/onboarding.jpg")}/>
        <View style={tw`absolute bottom-0 w-full bg-blue-500 rounded-t-3xl p-4`}>
          <TouchableOpacity
            style={tw`ml-1/4`}
            onPress={openBottomSheet}
          >
            <Text style={tw`text-white text-center text-lg`}>Login</Text>
          </TouchableOpacity>

          <View style={tw`${isOpen?"":" hidden"} p-4`}>
            <TextInput>Google</TextInput>
          </View>
        </View>

        {/* <BottomSheet
          ref={bottomSheetRef}
          snapPoints={['100%']}
          index={-1}
          // index={isOpen ? 1 : -1}  // Control the index of the bottom sheet
          onClose={closeBottomSheet}
        >
          <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
        </BottomSheet> */}
      </View>
    </GestureHandlerRootView>
  );
}
