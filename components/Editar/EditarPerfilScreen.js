import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./editarPerfilScreen.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";

export default function EditarPerfilScreen({ navigation }) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const carregarId = async () => {
  //     const storedId = await AsyncStorage.getItem("userId");
  //     if (storedId) {
  //       setId(parseInt(storedId));
  //     }
  //   };

  //   carregarId();
  // }, []);

  useEffect(() => {
    const carregarDadosDoUsuario = async () => {
      try {
        const storedId = await AsyncStorage.getItem("userId");

        if (!storedId) {
          Alert.alert("Erro", "ID do usuário não encontrado.");
          return;
        }

        setId(parseInt(storedId));
        setLoading(true);

        const response = await fetchComTimeout(
          `${BASE_URL}/users/${storedId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setNome(data.fullName || "");
          setEmail(data.email || "");
          setSenha(data.password || "");
          setConfirmarSenha(data.password || "");
        } else {
          Alert.alert("Erro", data.message || "Erro ao carregar os dados.");
        }
      } catch (err) {
        Alert.alert(
          "Erro de conexão",
          "Não foi possível carregar os dados do usuário."
        );
      } finally {
        setLoading(false);
      }
    };

    carregarDadosDoUsuario();
  }, []);

  const servidoresPermitidos = ["gmail.com", "hotmail.com"];

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    const dominio = email.split("@")[1]?.toLowerCase();
    return servidoresPermitidos.includes(dominio);
  };

  const validarCampos = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return false;
    }

    if (nome.trim().length < 5) {
      Alert.alert("Erro", "O nome deve ter pelo menos 5 caracteres.");
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

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return false;
    }

    return true;
  };

  const handleSalvar = async () => {
    if (!validarCampos()) return;

    const payload = {
      id: id,
      fullName: nome,
      email: email,
      password: senha,
      confirmPassword: confirmarSenha,
    };

    setLoading(true);

    try {
    const response = await fetchComTimeout(`${BASE_URL}/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      } else {
        Alert.alert("Erro", data.message || "Erro ao atualizar o perfil.");
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <BackToHomeButton navigation={navigation} />

            <Image
              source={require("../../assets/logo6.jpg")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Atualizar Perfil</Text>
            <Text style={styles.subtitle}>
              Edite suas informações pessoais para manter seu cadastro sempre
              atualizado
            </Text>

            <View style={styles.inputContainer}>
              <Feather name="user" size={20} color="#999" style={styles.icon} />
              <TextInput
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Feather name="mail" size={20} color="#999" style={styles.icon} />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Feather name="lock" size={20} color="#999" style={styles.icon} />
              <TextInput
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Feather name="lock" size={20} color="#999" style={styles.icon} />
              <TextInput
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                style={styles.input}
              />
            </View>

            <TouchableOpacity
              style={[styles.saveButton, loading && { opacity: 0.6 }]}
              onPress={handleSalvar}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.saveButtonText}>Salvar</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>

        <FooterMenu navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}
