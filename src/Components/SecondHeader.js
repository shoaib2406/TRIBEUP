import React from "react";
import { TouchableOpacity, View, StyleSheet, Text,Image } from "react-native";
import { Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LogoImage from "../Components/LogoImage";
import viewProfile from "../Images/viewProfile.png"
const SecondHeader = (props) => {
  const { navigation,heading  } = props;
  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
            backgroundColor: "black",
            flex: 1,
          },
        ]}
      >
        <View style={{ flex: 0.8 }} />
        <LogoImage />
        <View style={{ flex: 0.4, alignItems: "center" }}>
        <Text style={{ fontSize: 26, fontWiegth: "bold", color: "white" }}>
          {props.heading}
        </Text>
      </View>
        <TouchableOpacity onPressIn={()=> console.log("first")}>
          <View style={styles.row}>
            <View style={{ width:40}}>
              <Icon name="arrow-left" size={20} color="white" type="entypo" />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWiegth: "bold",
                color: "white",
              }}
            >
              Back
            </Text>
            <Image
            source={viewProfile}
            resizeMode='contain'
            style={{
              zIndex: 0,
              height: 40,
              width: 110,
              marginLeft: 'auto',
              marginRight: 40,
              marginTop: 2,
            }}
          />
          </View>
        </TouchableOpacity>
        {props.children}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
  },
  loginBox: {
    borderBottomColor: "rgb(255, 179, 0)",
    color: "white",
    borderBottomWidth: 1,
    top: 20,
    margin: 10,
    width: "70%",
  },
  loginButton: {
    justifyContent: "center",
    width: 290,
    height: 60,
    top: 50,
    alignItems: "center",
    borderRadius: 16,
    color: "white",
    backgroundColor: "#FDA500",
  },
  textBox: {
    marginLeft: "auto",
    marginRight: "auto",
    top: 20,
  },
  text: {
    color: "rgb(201, 199, 193)",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "4%",
  },
});

export default SecondHeader;
