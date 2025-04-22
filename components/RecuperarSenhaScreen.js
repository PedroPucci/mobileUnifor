import React, { useState } from "react";


import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";

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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }} // substitua pelo seu logo
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Recuperar senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleRecuperar}>
        <Text style={styles.buttonText}>Gerar nova senha</Text>
      </TouchableOpacity>
    </View>
  );
}
