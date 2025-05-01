import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BackToHomeButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.text}>Voltar ao início</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  text: {
    color: "#1877f2",
    fontWeight: "bold",
  },
});
