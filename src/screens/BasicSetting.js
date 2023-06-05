import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import SecondHeader from "../Components/SecondHeader";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <SecondHeader heading="Basic Heading">
        <View
          style={{
            flex: 5,
            alignItems: "center",
          }}
        >
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: "white" }}
              placeholder="First Name"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              // secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="Last Name"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: "white" }}
              placeholder="Gender"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="Relationship Status"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: "white" }}
              placeholder="Country"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="website"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: "white" }}
              placeholder="Birthday"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="About me"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor="white"
            />
          </View>

          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              //   loginFunc();
              navigation.navigate("OnBoarding");
            }}
          >
            <View style={styles.loginButton}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                {loading ? "loading...." : "Save Changes"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SecondHeader>
    </View>
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
    width: "70%",
    top: 20,
  },
  text: {
    color: "rgb(201, 199, 193)",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Signup;
