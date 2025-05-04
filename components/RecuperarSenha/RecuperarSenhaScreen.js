import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles";
import * as Clipboard from "expo-clipboard";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";

export default function RecuperarSenhaScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  
  const handleRecuperar = async () => {
    if (!email) {
      Alert.alert("Erro", "Informe o email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Informe um email válido.");
      return;
    }

    const payload = { email: email };
    setLoading(true);

    try {
      const response = await fetchComTimeout(`${BASE_URL}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Verifique na tela a sua nova senha!");
        setNovaSenha(data.message);
        setEmail("");
      } else {
        Alert.alert("Erro", data.message || "Erro ao recuperar senha.");
      }
    } catch (err) {
      const message =
        err.message === "Tempo limite excedido"
          ? "A conexão está lenta ou instável. Por favor, tente novamente em instantes."
          : "Entre em contato com o suporte para verificar o problema.";
      Alert.alert("Erro de conexão", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container_principal}>
      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.texto_contato, { fontSize: 22, marginBottom: 20 }]}>
        Recuperar senha
      </Text>

      <Text style={[styles.texto_contato, { fontSize: 13, marginBottom: 20 }]}>
        Informe o email para o qual deseja redefinir sua senha
      </Text>

      <View style={styles.inputContainer}>
        <Feather name="mail" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        disabled={novaSenha === ""}
        onPress={() => {
          if (novaSenha) {
            Clipboard.setStringAsync(novaSenha);
            Alert.alert(
              "Senha copiada para a área de transferência!"
            );
          }
        }}
        style={{
          backgroundColor: "#f2f2f2",
          padding: 15,
          borderRadius: 10,
          marginVertical: 10,
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "#666", textAlign: "center", fontSize: 16 }}>
          {novaSenha || "A sua senha será exibida aqui!"}
        </Text>
      </TouchableOpacity>

      <View style={{ width: "90%" }}>
        <TouchableOpacity
          style={[styles.botao_azul, loading && { opacity: 0.6 }]}
          onPress={handleRecuperar}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.texto_botao_branco}>Gerar nova senha</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "#1877f2" }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
