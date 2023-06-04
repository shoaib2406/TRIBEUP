import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Icon } from "react-native-elements";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [enabled, setEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <View style={{
            backgroundColor: "#000",
            flex: 1,
        }}>
            <View
                style={{
                    marginTop: 100,
                    alignItems: "center",
                    marginBottom: '10%'
                }}
            >
                <Image source={Logo} />
            </View>
            <TouchableOpacity>
                <View style={styles.row}>
                    <View >
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
            <Text style={styles.h1}>Change Password</Text>
            <View style={{ flex: 0.1 }} />
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View style={styles.loginBox}>
            <TextInput
            secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="Old Password"
              onChangeText={(newText) => setOldPassword(newText)}
              defaultValue={oldPassword}
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: "white" }}
              placeholder="New Password"
              onChangeText={(newText) => setNewPassword(newText)}
              defaultValue={newPassword}
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
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                {loading ? "loading...." : "Change Password"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.5, alignItems: "center" }} />
        

        <View style={{ flex: 0.2, alignItems: "center" }} />
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "4%",
    },
    h1: {
        fontSize: 36,
        fontWiegth: 'bold',
        color: '#fff',
        textAlign: 'center',
        // marginBottom:20,
        marginTop:40
    },
    container: {
        flex: 1,
        // height: 900,
      },
      loginBox: {
        borderBottomColor: "rgb(255, 179, 0)",
        color: "white",
        borderBottomWidth: 1,
        // top: 20,
        margin: 10,
        width: "70%",
      },
      loginButton: {
        justifyContent: "center",
        width: 290,
        height: 50,
        top: 30,
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
      
});
