import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./editarPerfilScreen.styles";

export default function EditarPerfilScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonVoltarText}>Voltar</Text>
      </TouchableOpacity>

      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Editar perfil</Text>

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

      <TouchableOpacity style={styles.saveButton}>
        <MaterialCommunityIcons name="account-edit" size={20} color="#1877f2" />
        <Text style={styles.saveButtonText}>Salvar alterações</Text>
      </TouchableOpacity>
    </View>
  );
}