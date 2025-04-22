import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Entrar" }],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Feather name="log-out" size={20} color="#1877f2" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Home</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Bem-vindo ao App de Monitoramento de Frequência! Com ele, você pode
          registrar facilmente seus horários de entrada e saída no escritório.
          Além disso, é possível visualizar sua frequência de forma rápida,
          tanto para o dia atual quanto para o mês inteiro. Tudo de maneira
          prática e organizada, para que você tenha um controle completo sobre
          suas horas de trabalho. Aproveite a ferramenta para gerenciar seu
          tempo de forma eficiente e transparente!
        </Text>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="message-square" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.active]}>
          <Feather name="alert-circle" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="clock" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="calendar" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  logoutText: {
    marginLeft: 5,
    color: "#1877f2",
    fontWeight: "bold",
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    marginVertical: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1877f2",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  navItem: {
    padding: 10,
  },
  active: {
    backgroundColor: "#0f62d0",
    borderRadius: 10,
  },
});
