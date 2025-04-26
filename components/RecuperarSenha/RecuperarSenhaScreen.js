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

  const handleRecuperar = () => {
    if (!email) {
      Alert.alert("Erro", "Informe o email.");
      return;
    }

    Alert.alert(
      "Pronto!",
      "Um link de recuperação foi enviado para seu e-mail."
    );
    setEmail("");
  };

  return (
    <View style={styles.container_principal}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.texto_contato, { fontSize: 22, marginBottom: 20 }]}>
        Recuperar senha
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