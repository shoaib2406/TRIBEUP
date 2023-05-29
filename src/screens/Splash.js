import React, { useEffect } from "react";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding");
    }, 2000);
  });

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#0A274C",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          {/* <ImageBackground
            source={logo}
            style={{
              width: 150,
              height: 190,
            }}
          /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Splash;
