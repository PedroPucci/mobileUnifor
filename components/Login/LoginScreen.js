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
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Informe o email e a senha.");
      return;
    }

    try {
      const response = await fetchComTimeout(`${BASE_URL}/users/by-credentials?email=${encodeURIComponent(
          email
        )}&senha=${encodeURIComponent(senha)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const userId = await response.json();

        if (userId === null) {
          Alert.alert("Erro", "Usuário ou senha não encontrados.");
          return;
        }

        await AsyncStorage.setItem("userId", userId.toString());
        navigation.navigate("Home", { userId });
      } else {
        Alert.alert("Erro", "Usuário ou senha não encontrados.");
      }
    } catch (err) {
      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar com o servidor."
      );
    }
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

          <Text style={styles.tituloLogin}>Seja bem vindo!</Text>
          <Text style={styles.subTituloLogin}>Faça login em sua conta</Text>

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
