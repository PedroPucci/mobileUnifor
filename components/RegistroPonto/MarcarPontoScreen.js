import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./marcarPontoScreen.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";

export default function MarcarPontoScreen({ navigation }) {
  const [entrada1, setEntrada1] = useState("");
  const [saida1, setSaida1] = useState("");
  const [entrada2, setEntrada2] = useState("");
  const [saida2, setSaida2] = useState("");

  return (
    <View style={styles.container}>
      <BackToHomeButton navigation={navigation} />

      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Enviar Registro de ponto</Text>

      <Text style={styles.dataText}>
        {new Date().toLocaleDateString("pt-BR")}
      </Text>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Entrada 1:"
          style={styles.input}
          value={entrada1}
          onChangeText={setEntrada1}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Saída 1:"
          style={styles.input}
          value={saida1}
          onChangeText={setSaida1}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Entrada 2:"
          style={styles.input}
          value={entrada2}
          onChangeText={setEntrada2}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Saída 2:"
          style={styles.input}
          value={saida2}
          onChangeText={setSaida2}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.buttonMarcar}>
        <Feather size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={styles.buttonMarcarText}>Marcar ponto</Text>
      </TouchableOpacity>

      <FooterMenu navigation={navigation} />
    </View>
  );
}