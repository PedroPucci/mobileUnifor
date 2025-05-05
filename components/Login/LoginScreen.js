import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import InputWithIcon from "../InputWithIcon";
import RegisterLoginTabs from "../RegisterLoginTabs";
import styles from "./loginScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // const handleLogin = () => {
  //   if (email && senha) {
  //     navigation.navigate("Home");
  //   } else {
  //     Alert.alert("Erro", "Verifique se o email e senha estão corretas.");
  //   }
  // };

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Informe o email e a senha.");
      return;
    }

    // Simulação provisória:
    await AsyncStorage.setItem("userId", "4"); // id fictício
    navigation.navigate("Home");

    // Quando o endpoint de login estiver pronto, descomente o bloco abaixo:
    /*
    const payload = {
      email: email,
      password: senha,
    };

    try {
      const response = await fetch("http://192.168.0.11:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("userId", data.id.toString());
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", data.message || "Email ou senha inválidos.");
      }
    } catch (err) {
      Alert.alert("Erro de conexão", "Não foi possível conectar com o servidor.");
    }
    */
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo6.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={[styles.tituloLogin]}>Seja bem vindo!</Text>
          <Text style={[styles.subTituloLogin]}>Faça login em sua conta</Text>

          <RegisterLoginTabs
            selected="Entrar"
            onTabChange={(tab) => {
              if (tab === "Registrar") navigation.navigate("Registrar");
            }}
          />

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

          <TouchableOpacity
            onPress={() => navigation.navigate("RecuperarSenha")}
          >
            <Text style={styles.forgot}>Recuperar senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}