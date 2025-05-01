import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RegisterLoginTabs({
  selected = "Registrar",
  onTabChange,
}) {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        style={[styles.tab, selected === "Entrar" && styles.activeTab]}
        onPress={() => onTabChange("Entrar")}
      >
        <Text style={selected === "Entrar" ? styles.activeText : styles.text}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, selected === "Registrar" && styles.activeTab]}
        onPress={() => onTabChange("Registrar")}
      >
        <Text
          style={selected === "Registrar" ? styles.activeText : styles.text}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    color: "#888",
  },
  activeText: {
    fontWeight: "bold",
    color: "#000",
  },
});
