import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./FooterMenu.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FooterMenu({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.menuContainer, { paddingBottom: insets.bottom || 10 }]}
    >
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("EnviarSolicitacao")}
      >
        <Feather name="edit-3" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("MarcarPonto")}
      >
        <Feather name="clock" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Frequencia")}
      >
        <Feather name="calendar" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("EditarPerfil")}
      >
        <Feather name="user" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}