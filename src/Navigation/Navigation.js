import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Signin from "../screens/Signin";
import OnBoarding from "../screens/OnBoarding";
import Signup from "../screens/Signup";
import BasicSetting from "../screens/BasicSetting";
import WorkSetting from "../screens/WorkSetting";
import LocationSetting from "../screens/LocationSetting";
import EducationSetting from "../screens/EducationSetting";
import Price from "../screens/Price";
import MyProfile from "../screens/MyProfile";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
import Article from "../screens/ArticleScreen";
import VideoLibrary from "../screens/VideoLibrary";
import MessageList from "../screens/MessageList";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="MessageList"
          component={MessageList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoLibrary"
          component={VideoLibrary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EducationSetting"
          component={EducationSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BasicSetting"
          component={BasicSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationSetting"
          component={LocationSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkSetting"
          component={WorkSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
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
