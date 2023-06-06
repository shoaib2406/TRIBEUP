import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import React from "react";
import HeaderWithIcons from "../Components/HeaderWithIcons";
import ArticleImg from "../../assets/article.png";
import { Icon } from "react-native-elements";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Article({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>

            <HeaderWithIcons />

            <View style={{ flex: 0.9, backgroundColor: "#000" }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: "#121413" }}>
                        <View style={{ justifyContent: 'center' }}>
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
                            <KeyboardAwareScrollView>

                            <Text style={{ textAlign: 'center', color: '#FDA500', fontSize: 28, fontWeight: 'bold',marginBottom:16 }}>Article for you</Text>
                            <View style={{alignSelf:'center'}}>
                                <Image source={ArticleImg} style={{marginBottom:16}} />
                            </View>
                            <View style={{ backgroundColor: "#2B2C2D", padding: 10, width: '85%', alignItems: 'center', alignSelf: 'center', borderRadius: 12, borderColor: '#797C7B', borderWidth: 1, marginBottom: 16 }}>
                                <Text style={{ color: '#FDA500', fontSize: 16, fontWeight: 'bold' }}>SHORT | Uuder Armour SportStyle</Text>
                            </View>
                            <View style={{ backgroundColor: "#2B2C2D", padding: 10, width: '85%', alignSelf: 'center', borderRadius: 12, borderColor: '#797C7B', borderWidth: 1, height: 200 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'justify', lineHeight: 36 }}>Your new favorite gym pants, ideal for almost any activity. Light, comfortable and ultra-soft inside.
                                    Gender: Men | Color: Blue | Sport: Casual | Fit: Standard | Material: 57% cotton, 38% polyester, 5% spandex</Text>
                                <View
                                    style={{
                                        // flex: 0.5,

                                        flexDirection: 'row',
                                        justifyContent: "flex-end",
                                        alignItems: 'center',

                                    }}
                                >
                                    <TouchableOpacity>
                                        <Octicons name="thumbsup" size={24} color="#FDA500" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name="message-reply-text" size={24} color="#FDA500" style={{ marginLeft: 18 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name="send" size={24} color="#FDA500" style={{ marginLeft: 18, marginRight: 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </KeyboardAwareScrollView>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View style={{ flex: 0.1, backgroundColor: "yellow" }}>
                <Text>footer</Text>
            </View> */}
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