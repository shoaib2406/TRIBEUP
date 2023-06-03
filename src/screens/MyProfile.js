import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.jpeg";
import { Icon } from "react-native-elements";
import Box from "../../assets/box.png";
import Star from "../../assets/star.png";
import Diamand from "../../assets/diamand.png";
export default function MyProfile() {
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
                <Image style={styles.tinyLogo} source={Logo} />
            </View>
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
            <View style={{ flexDirection: 'row',alignItems: 'center',marginBottom:'7%',marginTop:'7%'  }}>

                <View style={{ width: '45%' }}>

                    <Image style={styles.img} source={Box} />

                </View>
                <Text style={styles.subHeading}> Edit Profile</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:'7%'  }}>

                <View style={{ width: '45%' }}>

                    <Image style={styles.img} source={Star} />

                </View>
                <Text style={styles.subHeading}>Privacy Settings</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:'7%'  }}>

                <View style={{ width: '45%' }}>

                    <Image style={styles.img} source={Diamand} />

                </View>
                <Text style={styles.subHeading}>Settings</Text>
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
