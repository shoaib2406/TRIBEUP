import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, } from "react-native";
import React from "react";
import HeaderWithIcons from "../Components/HeaderWithIcons";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import User from "../../assets/user.jpeg";
import First from "./../Images/First.png";
import Menu from "./../Images/Menu.png";
import Second from "./../Images/Second.png";
import Third from "./../Images/Third.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function MessageList({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>

            <HeaderWithIcons />

            <View style={{ flex: 0.9, backgroundColor: "#000" }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: "#121413" }}>
                        <View >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    alignItems: 'center',
                                    paddingTop: 18
                                }}
                            >
                                <TouchableOpacity>
                                    <FontAwesome name="camera" size={24} color="#FDA500" />
                                    {/* <Octicons name="thumbsup" size={24} color="#FDA500" /> */}
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="edit" size={24} color="#FDA500" style={{ marginLeft: 18, marginRight: 18 }} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={User} // Replace with your actual image path
                                        style={styles.userImage}
                                    />
                                </View>
                                <Text style={styles.subHeading}>Shoaib Ur Rehman</Text>
                            </View>
                            <View style={styles.container}>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Search..."
                                // Add necessary TextInput props and handlers
                                />
                                <TouchableOpacity
                                    style={styles.searchButton}
                                // onPress={handleSearch}
                                >
                                    <Text style={styles.buttonText}>Search</Text>
                                </TouchableOpacity>
                            </View>
                            <KeyboardAwareScrollView>

                                <View style={{
                                    flex: 1, borderTopLeftRadius: 50, backgroundColor: "#2B2C2D", height: 900, marginTop: 18,
                                    borderTopRightRadius: 50,
                                }}>
                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center',padding:20, }}>
                                        <View style={styles.imageContainer}>
                                            <Image
                                                source={User} // Replace with your actual image path
                                                style={styles.userImage1}
                                            />
                                        </View>
                                        <Text style={styles.subHeading}>Shoaib Ur Rehman</Text>
                                        <Text style={styles.subHeading1}>How are you today?</Text>
                                    </View> */}
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Alex Linderson</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Angel Dayna</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Sabila Sayma</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>John Ahraham</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Alex Linderson</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Angel Dayna</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>Sabila Sayma</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.containerNew}>
                                        <Image
                                            source={User}
                                            style={styles.image}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.heading}>John Ahraham</Text>
                                            <Text style={styles.subText}>How are you today?</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.time}>2 min ago</Text>
                                            <View style={styles.circle}>
                                                <Text style={styles.circleText}>3</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
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
        height: 900,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '85%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 16,
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
    imageContainer: {
        marginLeft: '5%',
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 75,
        borderColor: '#fff',
        borderWidth: 1,
    },
    userImage1: {
        width: 40,
        height: 40,
        borderRadius: 12,
        borderColor: '#fff',
    },
    subHeading: {
        fontSize: 20,
        fontWiegth: 'bold',
        color: '#fff',
        marginLeft: 8
    },
    subHeading1: {
        fontSize: 12,
        // fontWiegth: 'bold',
        color: '#fff',
        marginLeft: 8,
        flex: 0.7
    },
    searchInput: {
        flex: 1,
        // height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 8,
        // paddingHorizontal: 1,
        borderRadius: 12,
        paddingVertical: 6,
        color: 'white',
        backgroundColor: '#797C7B',
        paddingLeft: 16

    },
    searchButton: {
        backgroundColor: '#FDA500',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },

    containerNew: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 14,
        borderRadius: 12
    },
    textContainer: {
        flex: 1,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    subText: {
        fontSize: 12,
        color: '#fff'

    },
    textContainer1: {
        flex: 1,
        backgroundColor: 'red'
    },
    time: {
        fontSize: 10,
        color: 'gray',
        textAlign: 'right',

    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: '#F04A4C',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 6
    },
    circleText: {
        color: 'white',
        fontSize: 14,
    },
});