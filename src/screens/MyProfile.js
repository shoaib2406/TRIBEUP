import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.jpeg";
import { Icon } from "react-native-elements";
import Box from "../../assets/box.png";
import Star from "../../assets/star.png";
import Diamand from "../../assets/diamand.png";
import Navigation from "../Navigation/Navigation";
import HeaderWithIcons from "../Components/HeaderWithIcons";
import First from "./../Images/First.png";
import Menu from "./../Images/Menu.png";
import Second from "./../Images/Second.png";
import Third from "./../Images/Third.png";
export default function MyProfile({ navigation }) {
    return (
        <View style={{
            backgroundColor: "#000",
            flex: 1,

        }}>
            <HeaderWithIcons />
            <View style={{ flex: 0.9, backgroundColor: "#000" }}>

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
                <Text style={styles.h1}>My Profile</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={User} // Replace with your actual image path
                        style={styles.userImage}
                    />
                    <Text style={styles.subHeading}>Shoaib Ur Rehman</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '7%', marginTop: '7%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '7%' }} onPressIn={() => {
                        navigation.navigate("EditProfile");
                    }}>

                        <View style={{ width: '57%' }}>

                            <Image style={styles.img} source={Box} />

                        </View>
                        <Text style={styles.subHeading}> Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '7%' }}>

                    <View style={{ width: '45%' }}>

                        <Image style={styles.img} source={Star} />

                    </View>
                    <Text style={styles.subHeading}>Privacy Settings</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '7%' }}>

                    <View style={{ width: '45%' }}>

                        <Image style={styles.img} source={Diamand} />

                    </View>
                    <Text style={styles.subHeading}>Settings</Text>
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
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderColor: '#FDA500',
        borderWidth: 4,
        marginBottom: 16

    },
    subHeading: {
        fontSize: 20,
        fontWiegth: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    header: {
        // flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '10%',
        backgroundColor: 'red'
    },
    img: {
        width: 40,
        height: 40,
        marginRight: 8,
        alignSelf: 'flex-end'
    },
    rowCenter: {
        flexDirection: "row",
        backgroundColor: 'green',

        alignContent: 'center',
    },
});
