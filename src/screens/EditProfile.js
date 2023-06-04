import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import { Icon } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EditProfile() {
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
            <Text style={styles.h1}>Edit Profile</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'center'}}>
                <View style={{ backgroundColor: '#FDA500', borderRadius:16, margin:10,justifyContent:'center',alignItems:'center',width: '35%',paddingTop:40,paddingBottom:40  }}>
                <MaterialCommunityIcons name="clipboard-text-outline" size={30} color="black" />
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Basic</Text>
                </View>
                <View style={{ backgroundColor: '#797C7B', borderRadius:16, margin:10,justifyContent:'center',alignItems:'center',width: '35%',paddingTop:40,paddingBottom:40  }}>
                    <AntDesign name="laptop" size={30} color="black" />
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Work</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'center'}}>
                <View style={{ backgroundColor: '#797C7B',borderRadius:16, margin:10,justifyContent:'center',alignItems:'center',width: '35%',paddingTop:40,paddingBottom:40  }}>
                    <Entypo name="location" size={30} color="black" />
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Location</Text>
                </View>
                <View style={{ backgroundColor: '#797C7B',borderRadius:16, margin:10,justifyContent:'center',alignItems:'center',width: '35%',paddingTop:40,paddingBottom:40 }}>
                <Entypo name="graduation-cap" size={30} color="black" />
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Education</Text>
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
        marginBottom:40,
        marginTop:40
    },






});