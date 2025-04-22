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
    if (email && senha) {
      Alert.alert("Logado", `Email: ${email}`);
      navigation.navigate("Home");
    } else {
      Alert.alert("Erro", "Verifique se o email e senha estão corretas.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }}
        style={styles.logo}
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
  tituloLogin: {
    fontSize: 22,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
});
