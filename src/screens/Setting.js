import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

import First from "./../Images/First.png";
import Menu from "./../Images/Menu.png";
import Second from "./../Images/Second.png";
import Third from "./../Images/Third.png";
import NewImage from "./../Images/NewImage.png";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoImage from "../Components/LogoImage";
import { Icon } from "react-native-elements";

import Logo from "../../assets/logo.png";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Setting = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 0.15 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              backgroundColor: "black",
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
              backgroundColor: "black",
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
      <View style={{ flex: 0.15, backgroundColor: "black" }}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <View style={{ flex: 1, backgroundColor: "black" }}>
            <SafeAreaView style={[styles.container, { overflow: "hidden" }]}>
              <ScrollView
                style={[
                  styles.container,
                  {
                    backgroundColor: "black",
                  },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "black",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  ></View>
                  <View style={{ flex: 0.2, backgroundColor: "black" }}>
                    <TouchableOpacity onPressIn={() => console.log("first")}>
                      <View style={styles.row}>
                        <View style={{ flex: 0.05 }}>
                          <Icon
                            name="arrow-left"
                            size={20}
                            color="white"
                            type="entypo"
                          />
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
                  </View>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{ fontSize: 26, fontWiegth: "bold", color: "red" }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 30,
                          fontWeight: "bold",
                          backgroundColor: "black",
                        }}
                      >
                        Settings
                      </Text>
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.65, backgroundColor: "red" }}>
        <View style={{ flex: 1, backgroundColor: "green" }}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <View style={{ flex: 1, backgroundColor: "black" }}>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={Second}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Account
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Edit Profile
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Change Password
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Privacy
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Membership
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Notiifcation
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Notiifcations
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        App Notification
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>More</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Bank Transfer
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2 }}>
                <View style={{ flex: 1 }}>
                  <View
                    style={[
                      styles.row,
                      {
                        height: "100%",
                        borderBottomColor: "yellow",
                        borderWidth: 1,
                        width: "90%",
                        marginLeft: "5%",
                      },
                    ]}
                  >
                    <View style={{ flex: 0.2, width: 10, marginLeft: "auto" }}>
                      <ImageBackground
                        source={First}
                        resizeMode="contain"
                        style={{
                          width: "100%",
                          height: 30,
                        }}
                      />
                    </View>

                    <View style={{ flex: 0.8, width: 10 }}>
                      <Text style={{ color: "white", fontSize: 18 }}>
                        Delete Account
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
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

export default Setting;
