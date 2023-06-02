import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Checkbox from "./Checkbox";
import { MaterialIcons } from '@expo/vector-icons';
import BuyBtn from "./BuyBtn";

function PriceCard({ img, title, subTitle, price, priceClr, healthCheck, issueCheck, investCheck, postCheck, workoutCheck }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const priceStyles = {
        ...styles.Price,
        color: priceClr,
    };
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const containerStyle = isExpanded ? styles.containerExpanded : styles.grayContainer;
    const headingStyle = isExpanded ? styles.headingExpanded : styles.heading;
    const imgStyle = isExpanded ? styles.ExpandImg : styles.img;
    return (
        <View style={containerStyle}>
            <TouchableWithoutFeedback onPress={handleToggle}>
                <View style={styles.header}>
                    
                    <Text style={headingStyle}><Image style={imgStyle} source={img} />{title}</Text>
                    <Text style={priceStyles}>${price}</Text>
                    <MaterialIcons
                        name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={24}
                        color="white"
                        style={{marginTop:12}}
                    />
                </View>
            </TouchableWithoutFeedback>

            {isExpanded && (
                <View style={styles.content}>
                    {/* Additional content goes here */}
                    <Text style={styles.contentSubH}>{subTitle}</Text>
                    <Checkbox checkedValue={healthCheck} content="Health and well being" />
                    <Checkbox checkedValue={issueCheck} content="Legal issue" />
                    <Checkbox checkedValue={investCheck} content="Investment Topic" />
                    <Checkbox checkedValue={postCheck} content="Post Careers" />
                    <Checkbox checkedValue={workoutCheck} content="Workout and Media" />
                    <BuyBtn title="Choose This Plan" />
                </View>

            )}
        </View>
    );
}
const styles = StyleSheet.create({
    grayContainer: {
        marginTop: 10,
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#797C7B',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        elevation: 2,
        width: '80%',
        paddingBottom:16
    },
    containerExpanded: {
        marginTop: 10,
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#797C7B',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
        elevation: 2,
        alignItems: 'flex-start',
        width: '80%'

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left',
        color: '#fff'
    },
    headingExpanded: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        marginLeft:'15%',
    },
    content: {
        marginTop: 16,
        alignSelf: 'center'
    },
    img: {
        width: 32,
        height: 32,
        marginRight: 8,
        alignContent: 'center',
        alignSelf: 'center',
    },
    ExpandImg: {
        width: 32,
        height: 32,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    Price: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop:12
    },
    contentSubH: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 8
    },
});
export default PriceCard;
