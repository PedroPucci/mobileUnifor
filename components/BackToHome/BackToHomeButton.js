import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BackToHomeButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Home")}
    >
      <Feather name="arrow-left-circle" size={24} color="#1877f2" />
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
