import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./redux/store";

const options = {
  headerShown:false
}

export default function RootLayout() {
  return (
    <Provider store={store}>

      <Stack>
        <Stack.Screen name="login/index" options={{...options}}/>
        <Stack.Screen name="home/index" options={{...options}}/>
      </Stack>
    </Provider>
)}
