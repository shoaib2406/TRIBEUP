import React, { useEffect } from "react";
import { ImageBackground, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../Images/Logo.png";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  });

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "black",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 100,
            alignItems: "center",
            // backgroundColor: "red",
            marginLeft: "5%",
          }}
        >
          <ImageBackground
            source={Logo}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 40,
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Splash;
