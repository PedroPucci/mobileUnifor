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

export default function RecuperarSenhaScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleRecuperar = async () => {
    if (!email) {
      Alert.alert("Erro", "Informe o email.");
      return;
    }

    const payload = { email: email };

    try {
      const response = await fetch(
        "http://192.168.0.11:5000/api/v1/auth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Recuperando senha...");
        Alert.alert("Sucesso", "Uma nova senha foi enviada para seu e-mail!");
        setEmail("");
      } else {
        Alert.alert("Erro", data.message || "Erro ao recuperar senha.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Erro de conexão", "Verifique se a API está rodando.");
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
        value="A sua senha será exibida aqui!"
        editable={false}
      />

      <View style={{ width: "90%" }}>
        <TouchableOpacity style={styles.botao_azul} onPress={handleRecuperar}>
          <Text style={styles.texto_botao_branco}>Gerar nova senha</Text>
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