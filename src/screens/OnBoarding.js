import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import rugby from "../../assets/rugby.png";
import Navigation from "../Navigation/Navigation";

export default function OnBoarding({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 120,
          alignItems: "center",
        }}
      >
        <Image style={styles.tinyLogo} source={Logo} />
      </View>
      <Text
        style={{
          marginTop: -90,
          marginLeft: "12%",
          marginRight: "20%",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        Our App connect the best athlets arround the world
      </Text>
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Image source={rugby} style={styles.image} resizeMode="cover" />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>
              Build To Connect And Make Difference
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPressIn={() => {
          navigation.navigate("Signin");

      }}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Sign up with email</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#fff", alignSelf: "center" }}>
          Existing Account?{" "}
        </Text>
        <TouchableOpacity style={{ display: "flex" }}>
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 300,
    height: 50,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FDA500",
    borderRadius: 16,
    paddingVertical: 14,
    marginLeft: 32,
    marginRight: 32,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    height: 380,
  },
  rightContainer: {
    flex: 1,
    position: "relative",
  },
  image: {
    marginRight: -80,
    flex: 1,
    width: "80%",
    height: "100%",
    alignSelf: "flex-end",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  overlayText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    paddingTop: 70,
    marginLeft: "7%",
  },
});
