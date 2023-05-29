import React from "react";
import { ImageBackground, View } from "react-native";
import Logo from "../Images/Logo.png";

function LogoImage() {
  return (
    <View
      style={{
        width: "90%",
        height: 100,
        alignItems: "center",
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
  );
}

export default LogoImage;
