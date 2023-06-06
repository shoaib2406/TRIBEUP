import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

import First from "./../Images/First.png";
import Menu from "./../Images/Menu.png";
import Second from "./../Images/Second.png";
import Third from "./../Images/Third.png";
import { Icon } from "react-native-elements";
import NewImage from "./../Images/NewImage.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";
import HeaderWithIcons from "../Components/HeaderWithIcons";

import Logo from "../../assets/logo.png";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 0.15 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              backgroundColor: "#2B2C2D",
              justifyContent: "center",
            }}
          >
            <Image
              source={Logo}
              resizeMode="contain"
              style={{
                height: 30,
                width: 200,
                marginLeft: 8,
              }}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              backgroundColor: "#2B2C2D",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <FontAwesome5 name="user-alt" size={24} color="#FDA500" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="message-reply-text"
                size={24}
                color="#FDA500"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="notifications-sharp"
                size={24}
                color="#FDA500"
                style={{ marginLeft: 18, marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.75 }}>
        <View style={{ flex: 1, backgroundColor: "#2B2C2D" }}>
          <View style={{ flex: 0.9, backgroundColor: "black" }}>
            <SafeAreaView style={[styles.container,{overflow:"hidden"}]}>
              <ScrollView
                style={[
                  styles.container,
                  {
                    backgroundColor: "#2B2C2D",
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                  },
                ]}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item,index) => (
                  <View
                  key={index}
                    style={{
                      flex: 1,
                      backgroundColor: "#797C7B",
                      height: 100,
                      marginTop: 30,
                      width: "90%",
                      marginLeft: "5%",
                      borderRadius: 20,
                    }}
                  >
                    <View style={[styles.row, { height: "100%" }]}>
                      <View
                        style={{
                          flex: 0.2,
                          backgroundColor: "#797C7B",
                          width: 10,
                        }}
                      >
                        <ImageBackground
                          source={NewImage}
                          resizeMode="contain"
                          style={{
                            width: "100%",
                            height: 45,
                            marginTop: "10%",
                          }}
                        />
                      </View>

                      <View
                        style={{
                          flex: 0.6,
                          backgroundColor: "#797C7B",
                          width: 10,
                        }}
                      >
                        <View style={{ flex: 1, backgroundColor: "#797C7B" }}>
                          <View
                            style={{ flex: 0.3, backgroundColor: "#797C7B" }}
                          >
                            <Text
                              style={{
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                marginTop: 5,
                              }}
                            >
                              Duponet Antomin
                            </Text>
                          </View>
                          <View style={{ flex: 0.7 }}>
                            <Text style={{ fontSize: 12 }}>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flex: 0.2,
                          backgroundColor: "#797C7B",
                          height: "100%",
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <View
                            style={{ flex: 0.3, backgroundColor: "#797C7B" }}
                          >
                            <TouchableOpacity>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: "bold",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                ...
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View
                            style={{ flex: 0.7, backgroundColor: "#797C7B" }}
                          >
                            <View style={{ flex: 1 }}>
                              <View
                                style={{
                                  flexWrap: "nowrap",
                                  flexDirection: "row",
                                }}
                              >
                                <TouchableOpacity style={{ flex: 0.33 }}>
                                  <ImageBackground
                                    source={First}
                                    resizeMode="contain"
                                    style={{
                                      width: "100%",
                                      height: 30,
                                      marginLeft: 1,
                                      marginTop: "100%",
                                    }}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 0.33 }}>
                                  <ImageBackground
                                    source={First}
                                    resizeMode="contain"
                                    style={{
                                      width: "100%",
                                      height: 30,
                                      marginLeft: 3,
                                      marginTop: "100%",
                                    }}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 0.33 }}>
                                  <ImageBackground
                                    source={First}
                                    resizeMode="contain"
                                    style={{
                                      width: "100%",
                                      height: 30,
                                      marginLeft: 3,
                                      marginTop: "100%",
                                    }}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.1 }}>
        <View style={{ flex: 1 }}>
          <View style={[styles.row, { height: "100%" }]}>
            <TouchableOpacity
              style={{ flex: 0.25, backgroundColor: "black", width: 10 }}
            >
              <ImageBackground
                source={First}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 30,
                  marginTop: "30%",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 0.25, backgroundColor: "black", width: 10 }}
            >
              <ImageBackground
                source={Second}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 30,
                  marginTop: "30%",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 0.25, backgroundColor: "black", width: 10 }}
            >
              <ImageBackground
                source={Third}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 30,
                  marginTop: "30%",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 0.25,
                backgroundColor: "black",
                height: "100%",
                width: 10,
              }}
            >
              <ImageBackground
                source={Menu}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 30,
                  marginTop: "30%",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    // marginLeft: "4%",
  },
  video: {
    flex: 1,
    width: "100%",
    height: 500,
    borderRadius: 40,
  },
  videoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Notification;
