import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import InputWithIcon from "../InputWithIcon";
import RegisterLoginTabs from "../RegisterLoginTabs";
import styles from "./registerScreen.styles";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";

export default function RegisterScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Registrar");
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [telefone, setTelefone] = useState("");

  const servidoresPermitidos = ["gmail.com", "hotmail.com"];

  const handleRegister = async () => {
    if (!validarCamposCadastro(nome, email, senha, cargaHoraria, telefone)) {
      return;
    }

    const payload = {
      fullName: nome,
      email,
      password: senha,
      workload: parseInt(cargaHoraria),
      phoneNumber: parseInt(telefone.replace(/\D/g, "")),
      createdAt: new Date().toISOString(),
    };

    setLoading(true);

    try {
      const response = await fetchComTimeout(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
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
      const message =
        err.message === "Tempo limite excedido"
          ? "A conexão está lenta ou instável. Por favor, tente novamente em instantes."
          : "Verifique se a API está rodando.";
      Alert.alert("Erro de conexão", message);
    } finally {
      setLoading(false);
    }
  };

  const validarCamposCadastro = (
    nome,
    email,
    senha,
    cargaHoraria,
    telefone
  ) => {
    if (!nome || !email || !senha || !cargaHoraria || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos antes de se cadastrar.");
      return false;
    }

    if (telefone.length < 8 || telefone.length > 11) {
      Alert.alert("Erro", "Telefone inválido. Informe 8 ou 11 dígitos.");
      return false;
    }

    if (nome.trim().length < 5) {
      Alert.alert("Erro", "O nome deve ter pelo menos 5 caracteres.");
      return false;
    }

    const cargaHorariaInt = parseInt(cargaHoraria);
    if (
      isNaN(cargaHorariaInt) ||
      cargaHorariaInt < 10 ||
      cargaHorariaInt > 100
    ) {
      Alert.alert("Erro", "Carga horária deve ser entre 10 e 100 horas.");
      return false;
    }

    if (!isValidEmail(email)) {
      Alert.alert(
        "Erro",
        `Email inválido. Use um dos domínios permitidos: ${servidoresPermitidos.join(
          ", "
        )}.`
      );
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    const dominio = email.split("@")[1]?.toLowerCase();
    return servidoresPermitidos.includes(dominio);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.container, { backgroundColor: "#fff" }]}>
          <Image
            source={require("../../assets/logo6.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.tituloCadastro}>Criar uma conta</Text>
          <Text style={styles.subTituloCadastro}>Inscreva-se para começar</Text>

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
            placeholder="Carga horária mensal"
            icon="clock"
            value={cargaHoraria}
            keyboardType="numeric"
            onChangeText={(text) =>
              setCargaHoraria(text.replace(/[^0-9]/g, ""))
            }
          />
          <InputWithIcon
            placeholder="Telefone"
            icon="phone"
            value={telefone}
            keyboardType="numeric"
            onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ""))}
          />

          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.6 }]}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Inscrever-se</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}