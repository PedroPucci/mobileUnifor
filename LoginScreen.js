// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Tela de Login</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import InputWithIcon from "./components/InputWithIcon";
import RegisterLoginTabs from "./components/RegisterLoginTabs";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Aqui você pode validar e chamar sua API
    if (email && senha) {
      Alert.alert("Logado", `Email: ${email}`);
    } else {
      Alert.alert("Erro", "Preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }}
        style={styles.logo}
      />

      {/* Tabs */}
      <RegisterLoginTabs
        selected="Entrar"
        onTabChange={(tab) => {
          if (tab === "Registrar") navigation.navigate("Registrar");
        }}
      />

      {/* Inputs */}
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

      {/* Recuperar senha */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Recuperar senha?</Text>
      </TouchableOpacity>

      {/* Botão Log In */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  forgot: {
    color: "#1877f2",
    alignSelf: "flex-end",
    marginTop: -10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

