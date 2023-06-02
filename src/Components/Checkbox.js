import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Checkbox = ({ checkedValue, content }) => {

    return (
        <View
            style={{ flexDirection: 'row', alignItems: 'center' }}

        >
            <View
                style={{
                    width: 16,
                    height: 16,
                    borderWidth: 2,
                    borderColor: '#FDA500',
                    borderRadius: 5,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {checkedValue && (
                    <AntDesign name="check" size={16} color="yellow" />
                )}
            </View>
            <Text style={styles.contentSubH}>{content}</Text>
        </View>
    );
};

export default Checkbox;
const styles = StyleSheet.create({
    contentSubH: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 4
    },
})