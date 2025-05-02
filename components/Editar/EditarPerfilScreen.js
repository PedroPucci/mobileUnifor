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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./editarPerfilScreen.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";

export default function EditarPerfilScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <FooterMenu navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}
