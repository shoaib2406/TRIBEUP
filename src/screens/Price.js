import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import { Icon } from "react-native-elements";
import PriceCard from "../Components/PriceCard";
import Box from "../../assets/box.png";
import Star from "../../assets/star.png";
import Diamand from "../../assets/diamand.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Price() {
      return (
        <KeyboardAwareScrollView style={{
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
            <Text style={styles.h1}>Pricing</Text>
            <Text style={styles.subHeading}>Choose your plan to get started</Text>
            <PriceCard title="Normal" subTitle="Choice to take one of the following" price="6.6" img={Box} priceClr='#FDA500' healthCheck={false} issueCheck={false} investCheck={true} postCheck={false} workoutCheck={false} />
            <PriceCard title="Medium" subTitle="Choice to take 3 of the following" price="14.99" img={Star} priceClr='#43A81F' healthCheck={false} issueCheck={true} investCheck={true} postCheck={false} workoutCheck={true} />
            <PriceCard title="Normal" subTitle="Choice to take 6 of the following" price="26.66" img={Diamand} priceClr='#A448F7' healthCheck={true} issueCheck={true} investCheck={true} postCheck={true} workoutCheck={true} />

        </KeyboardAwareScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    logoAlign: {
        margin: 80,
        alignItems: "center",
    },
    h1: {
        fontSize: 48,
        fontWiegth: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 20,
        fontWiegth: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "4%",
    },

});