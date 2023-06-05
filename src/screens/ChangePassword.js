import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import Header from "../Components/Header";

const ChangePassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Header>
      <View style={{ flex: 0.4, alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 26, fontWiegth: "bold", color: "white" }}>
          Change Password
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          alignItems: "center",
        }}
      >
        <View style={styles.loginBox}>
          <TextInput
            style={{ height: 40, color: "white" }}
            placeholder="Old Password"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={email}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            secureTextEntry={true}
            style={{ height: 40, color: "white" }}
            placeholder="New Password"
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            secureTextEntry={true}
            style={{ height: 40, color: "white" }}
            placeholder="Confirm New Password"
            onChangeText={(newText) => setConfirmPassword(newText)}
            defaultValue={confirmPassword}
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
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {loading ? "loading...." : "Change Password"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.5, alignItems: "center" }} />

      <View style={{ flex: 0.2, alignItems: "center" }} />
    </Header>
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

export default ChangePassword;
