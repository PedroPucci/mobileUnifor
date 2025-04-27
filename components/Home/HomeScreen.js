import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./homeScreen.styles";

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
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

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

      <View style={styles.menuContainer}>
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
    </View>
  );
}