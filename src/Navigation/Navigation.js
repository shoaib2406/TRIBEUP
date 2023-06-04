import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Signin from "../screens/Signin";
import OnBoarding from "../screens/OnBoarding";
import Price from "../screens/Price";
import MyProfile from "../screens/MyProfile";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Price"
          component={Price}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
