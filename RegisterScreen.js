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

export default function RegisterScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Registrar");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleRegister = async () => {
    const payload = {
      fullName: nome,
      email: email,
      password: senha,
      workload: parseInt(cargaHoraria),
      phoneNumber: parseInt(telefone.replace(/\D/g, "")),
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://192.168.0.11:5000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Usuário cadastrado, exibindo alerta...");
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

        setNome("");
        setEmail("");
        setSenha("");
        setCargaHoraria("");
        setTelefone("");        
      } else {
        Alert.alert("Erro", data.message || "Erro ao cadastrar.");
      }
    } catch (err) {
      Alert.alert("Erro de conexão", "Verifique se a API está rodando.");
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

      <Text style={styles.tituloCadastro}>Faça seu cadastro!</Text>

      <RegisterLoginTabs
        onTabChange={(tab) => {
          setSelectedTab(tab);
          if (tab === "Entrar") navigation.navigate("Entrar");
        }}
      />

      <InputWithIcon
        placeholder="Nome completo"
        icon="user"
        value={nome}
        onChangeText={setNome}
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
      <InputWithIcon
        placeholder="Carga horária"
        icon="clock"
        value={cargaHoraria}
        onChangeText={setCargaHoraria}
      />
      <InputWithIcon
        placeholder="Telefone"
        icon="phone"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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
  logo: { width: 60, height: 60, alignSelf: "center", marginBottom: 30 },
  button: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  tituloCadastro: {
    fontSize: 22,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
});
