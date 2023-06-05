import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LogoImage from "../Components/LogoImage";
import Navigation from "../Navigation/Navigation";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
console.log("Master Code")
  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
            backgroundColor: "black",
          },
        ]}
      >
        <View style={{ flex: 1 }} />
        <LogoImage />

        <TouchableOpacity>
          <View style={styles.row}>
            <View style={{ flex: 0.05 }}>
              <Icon name="arrow-left" size={20} color="white" type="entypo" />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWiegth: "bold",
                color: "white",
                marginLeft: "3%",
                // backgroundColor: "red",
              }}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 0.4, alignItems: "center" }}>
          <Text style={{ fontSize: 26, fontWiegth: "bold", color: "white" }}>
            Sign In
          </Text>
        </View>
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            flex: 2,
            alignItems: "center",
          }}
        >
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: "white" }}
              placeholder="Email"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="Password"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.textBox}>
            <View style={styles.row}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWiegth: "bold",
                    color: "rgb(201, 199, 193)",
                    height: 25,
                  }}
                >
                  Forget Your Password?
                </Text>
              </View>
              <TouchableOpacity
                style={{ marginRight: "1%" }}
                onPressIn={() => {
                    navigation.navigate("ChangePassword");
                }}
              >
                <Text
                  style={{
                    fontWiegth: "bold",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  {" "}
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
<View style={{marginTop:50}}>

          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              //   loginFunc();
              navigation.navigate("MyProfile");
            }}
          >
            <View style={styles.loginButton}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                {loading ? "loading...." : "Login"}
              </Text>
            </View>
          </TouchableOpacity>
</View>
        </View>

        <View style={{ flex: 0.5, alignItems: "center" }} />
        <View style={{ flex: 0.5, alignItems: "center" }}>
          <View style={styles.row}>
            <View style={{ flex: 0.47 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWiegth: "bold",
                  color: "rgb(201, 199, 193)",
                  height: 25,
                }}
              >
                Don't have account?
              </Text>
            </View>
            <TouchableOpacity
              style={{ marginRight: "1%" }}
              onPressIn={() => {
                navigation.navigate("Price");
              }}
            >
              <Text
                style={{
                  fontWiegth: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.2, alignItems: "center" }} />
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
    // top: 50,
    // marginTop:50,
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
    marginTop:20
  },
});

export default SignIn;
