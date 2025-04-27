import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import InputWithIcon from "../InputWithIcon";
import RegisterLoginTabs from "../RegisterLoginTabs";
import styles from "./loginScreen.styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email && senha) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Erro", "Verifique se o email e senha estão corretas.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <RegisterLoginTabs
        selected="Entrar"
        onTabChange={(tab) => {
          if (tab === "Registrar") navigation.navigate("Registrar");
        }}
      />

      <Text style={[styles.tituloLogin]}>Seja bem vindo!</Text>

      <InputWithIcon
        placeholder="Email"
        icon="mail"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithIcon
        placeholder="Senha"
        icon="lock"
        secureText
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
        <Text style={styles.forgot}>Recuperar senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}