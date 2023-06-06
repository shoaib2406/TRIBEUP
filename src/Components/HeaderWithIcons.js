import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Logo from "../../assets/logo.png";

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function HeaderWithIcons({ title }) {
    return (


        <View style={{ flex: 0.15, }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "black",
                        justifyContent: "center",
                    }}
                >
                    <Image source={Logo} resizeMode="contain"
                        style={{
                            height: 30,
                            width: 200,
                            marginLeft: 8
                        }} />

                </View>
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "black",
                        flexDirection: 'row',
                        justifyContent: "flex-end",
                        alignItems: 'center',

                    }}
                >
                    <TouchableOpacity>

                        <FontAwesome5 name="user-alt" size={24} color="#FDA500" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="message-reply-text" size={24} color="#FDA500" style={{ marginLeft: 18 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="notifications-sharp" size={24} color="#FDA500" style={{ marginLeft: 18, marginRight: 10 }} />
                    </TouchableOpacity>


                </View>
                {/* <View style={{ flex: 0.2, backgroundColor: "black" }}>
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
                    </View> */}
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    button: {
        marginTop: 8,
        backgroundColor: '#FDA500',
        paddingVertical: 10,
        paddingHorizontal: 0,
        borderRadius: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default HeaderWithIcons;



