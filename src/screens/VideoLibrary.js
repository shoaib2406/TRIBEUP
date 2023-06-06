import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";
import LogoImage from "../Components/LogoImage";
import First from "./../Images/First.png";
import Menu from "./../Images/Menu.png";
import Second from "./../Images/Second.png";
import Third from "./../Images/Third.png";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";

const VideoLibrary = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 0.3 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.8,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LogoImage />
          </View>
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
        </View>
      </View>

      <View style={{ flex: 0.6 }}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <View style={{ flex: 0.1 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 26, fontWiegth: "bold", color: "red" }}>
                <Text
                  style={{ color: "#FDA500", fontSize: 24, fontWeight: "bold" }}
                >
                  ____
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    backgroundColor: "black",
                  }}
                >
                  VIDEO LIBRARY
                </Text>
                <Text
                  style={{ color: "#FDA500", fontSize: 24, fontWeight: "bold" }}
                >
                  ___
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.9, backgroundColor: "black" }}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={[styles.container]}>
                {[1, 2, 3, 4, 5].map(() => (
                  <View
                    style={{
                      height: 250,
                      flexDirection: "row",
                      padding: 20,
                    }}
                  >
                    <View style={styles.videoRow}>
                      <View style={{ flex: 0.8, backgroundColor: "grey" }}>
                        <Video
                          ref={video}
                          style={styles.video}
                          source={{
                            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                          }}
                          useNativeControls={false}
                          resizeMode={ResizeMode.CONTAIN}
                          isLooping
                          onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                          }
                        />
                      </View>
                      <View style={{ flex: 0.1, backgroundColor: "black" }}>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 8,
                            textAlign: "left",
                            marginLeft: 10,
                          }}
                        >
                          Lorem Ipsum is simplyLorem Ipsum
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 8,
                            textAlign: "left",
                            marginLeft: 10,
                          }}
                        >
                          Lorem Ipsum is simplyLorem Ipsum
                        </Text>
                      </View>
                    </View>
                    <View style={styles.videoRow}>
                      <View style={{ flex: 0.8, backgroundColor: "grey" }}>
                        <Video
                          ref={video}
                          style={styles.video}
                          source={{
                            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                          }}
                          useNativeControls={false}
                          resizeMode={ResizeMode.CONTAIN}
                          isLooping
                          onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                          }
                        />
                      </View>
                      <View style={{ flex: 0.1, backgroundColor: "black" }}>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 8,
                            textAlign: "left",
                            // marginLeft: 10,
                          }}
                        >
                          Lorem Ipsum is simplyLorem Ipsum
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 8,
                            textAlign: "left",
                            // marginLeft: 10,
                          }}
                        >
                          Lorem Ipsum is simplyLorem Ipsum
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>

              {/* </ScrollView> */}
            </SafeAreaView>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.1 }}>
        <View style={{ flex: 1 }}>
          <View style={[styles.row, { height: "100%" }]}>
            <TouchableOpacity style={{ flex: 0.25, backgroundColor: "black", width: 10 }}>
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

            <TouchableOpacity style={{ flex: 0.25, backgroundColor: "black", width: 10 }}>
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

            <TouchableOpacity style={{ flex: 0.25, backgroundColor: "black", width: 10 }}>
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
    marginLeft: "4%",
  },
  video: {
    flex: 1,
    width: "100%",
    height: 500,
    borderRadius: 40,
  },
  videoRow: {
    flex: 0.5,
    margin: 5,
  },
});

export default VideoLibrary;
