import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "./redux/userSlice";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";


export default function Screen() {
  const user = useSelector(state => state?.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("hi",user)
  },[user])



  return (

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        {user?.phoneNumber!=="" ?
        <TouchableOpacity
        style={tw`ml-1/4`}
      >
        <Text style={tw`text-white text-center text-lg`}> hi {user?.phoneNumber}</Text>
      </TouchableOpacity>:
        <Redirect href={"/login"} />}
      </View>
  );
}
