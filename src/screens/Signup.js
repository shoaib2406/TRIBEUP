import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import Header from "../Components/Header";
import { CheckBox } from "@rneui/themed";

const Signup = ({ navigation }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [Id, setId] = useState("");
  const [Proof, setProof] = useState("")
  
  const [toggle, setToggle] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1 }} >
    <Header>
      <View style={{ flex: 0.4, alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWiegth: "bold", color: "white" }}>
          Sign Up
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
        }}
      >
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="First Name"
            onChangeText={(newText) => setfirstName(newText)}
            defaultValue={firstName}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            // secureTextEntry={true}
            style={{ height: 40, color: "white" }}
            placeholder="Last Name"
            onChangeText={(newText) => setlastName(newText)}
            defaultValue={lastName}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="User Name"
            onChangeText={(newText) => setuserName(newText)}
            defaultValue={userName}
            placeholderTextColor="white"
          />
        </View>
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
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="Gender"
            onChangeText={(newText) => setGender(newText)}
            defaultValue={Gender}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="ID"
            onChangeText={(newText) => setId(newText)}
            defaultValue={Id}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="Proof"
            onChangeText={(newText) => setProof(newText)}
            defaultValue={Proof}
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.textBox}>
          <View style={styles.row}>
            <CheckBox
              checked={toggle}
              onPressIn={()=>{setToggle(!toggle)}}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="rgb(255, 179, 0)"
              containerStyle={{ backgroundColor: "black" }}
            />
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWiegth: "bold",
                  color: "rgb(201, 199, 193)",
                  height: 25,
                }}
              >
                Forget Your Password?
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          disabled={enabled}
          onPressIn={() => {
            //   loginFunc();
            navigation.navigate("OnBoarding");
          }}
         style={{marginTop:5}}
        >
          <View style={styles.loginButton}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {loading ? "loading...." : "Login"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Header>
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
