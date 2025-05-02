import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import FooterMenu from "../Footer/FooterMenu";
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
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        accessibilityLabel="Voltar à tela de login"
      >
        <Feather name="log-out" size={20} color="#1877f2" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Bem-vindo!</Text>

      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Com este app, você pode registrar facilmente seus horários de entrada
          e saída no escritório. Visualize sua frequência diária e mensal de
          forma rápida, prática e organizada. Gerencie suas horas de trabalho
          com eficiência e transparência!
        </Text>
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipText}>
          💡 Dica: Registre sua entrada assim que chegar ao trabalho!
        </Text>
      </View>

      <FooterMenu navigation={navigation} />
    </View>
  );
}
