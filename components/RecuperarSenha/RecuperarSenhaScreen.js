import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles";
import { ActivityIndicator } from "react-native";

export default function RecuperarSenhaScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");

  const fetchComTimeout = (url, options, timeout = 5000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Tempo limite excedido")), timeout)
      ),
    ]);
  };

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
      const response = await fetchComTimeout(
        "http://192.168.0.11:5000/api/v1/auth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Verifique na tela a sua nova senha!");
        console.log("Resposta da API:", data); // Veja se existe data.password
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

      <TextInput
        style={[
          styles.inputPass,
          { backgroundColor: "#f2f2f2", color: "#666" },
        ]}
        value={novaSenha ?? "A sua senha será exibida aqui!"}
        editable={false}
      />

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