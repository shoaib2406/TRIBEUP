import React from "react";
import { StyleSheet, Text, TouchableOpacity,} from "react-native";

function BuyBtn({ title }) {
  return (
    <TouchableOpacity style={styles.button} onPress={console.log("hi")}>
      <Text style={styles.buttonText}>{title}</Text>

    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop:8,
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
export default BuyBtn;
