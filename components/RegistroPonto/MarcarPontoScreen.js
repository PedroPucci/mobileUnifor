import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./marcarPontoScreen.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import Relogio from "../Relogio/Relogio";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MarcarPontoScreen({ navigation }) {
  const [entrada1, setEntrada1] = useState("");
  const [saida1, setSaida1] = useState("");
  const [entrada2, setEntrada2] = useState("");
  const [saida2, setSaida2] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const carregarIdERegistros = async () => {
      const id = await AsyncStorage.getItem("userId");
      //const id = 4;
      if (!id) return;

      setUserId(id);
      const hoje = new Date().toISOString().split("T")[0];

      try {
        const response = await fetchComTimeout(
          `${BASE_URL}/points/user/${id}/date/${hoje}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        
        let entrada1Temp = "";
        let saida1Temp = "";
        let entrada2Temp = "";
        let saida2Temp = "";

        data.forEach((registro) => {
          if (registro.morningEntry && !entrada1Temp)
            entrada1Temp = registro.morningEntry;
          if (registro.morningExit && !saida1Temp)
            saida1Temp = registro.morningExit;
          if (registro.afternoonEntry && !entrada2Temp)
            entrada2Temp = registro.afternoonEntry;
          if (registro.afternoonExit && !saida2Temp)
            saida2Temp = registro.afternoonExit;
        });

        setEntrada1(entrada1Temp);
        setSaida1(saida1Temp);
        setEntrada2(entrada2Temp);
        setSaida2(saida2Temp);
      } catch (err) {
        Alert.alert("Erro", "Não foi possível carregar os registros do dia.");
      }
    };

    carregarIdERegistros();
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().substring(0, 8);
  };

  const handleMarcarPonto = async () => {
    if (!userId) {
      Alert.alert("Erro", "Usuário não identificado.");
      return;
    }

    const horaAtual = getCurrentTime();
    const hojeUtc = new Date().toISOString().split("T")[0] + "T00:00:00Z";
    let campoAtual = "";
    let payload = {
      userId: parseInt(userId),
      date: hojeUtc,
    };

    if (!entrada1) {
      payload.morningEntry = horaAtual;
      campoAtual = "entrada1";
    } else if (!saida1) {
      payload.morningExit = horaAtual;
      campoAtual = "saida1";
    } else if (!entrada2) {
      payload.afternoonEntry = horaAtual;
      campoAtual = "entrada2";
    } else if (!saida2) {
      payload.afternoonExit = horaAtual;
      campoAtual = "saida2";
    } else {
      Alert.alert(
        "Aviso",
        "Todos os horários de ponto já foram registrados hoje."
      );
      return;
    }

    try {
      const response = await fetchComTimeout(`${BASE_URL}/points`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        switch (campoAtual) {
          case "entrada1":
            setEntrada1(horaAtual);
            break;
          case "saida1":
            setSaida1(horaAtual);
            break;
          case "entrada2":
            setEntrada2(horaAtual);
            break;
          case "saida2":
            setSaida2(horaAtual);
            break;
        }

        Alert.alert(
          "Sucesso",
          `Ponto registrado: ${campoAtual.replace(/[1-2]/g, "")}`
        );
      } else {
        Alert.alert("Erro", data.message || "Erro ao registrar o ponto.");
      }
    } catch (error) {
      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar com o servidor."
      );
    }
  };

  return (
    <View style={styles.container}>
      <BackToHomeButton navigation={navigation} />

      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Enviar Registro de ponto</Text>
      <Text style={styles.subtitle}>
        Registre aqui seus horários de entrada e saída para manter seu controle
        de ponto em dia.
      </Text>

      {/* <Text style={styles.dataText}>
        {new Date().toLocaleDateString("pt-BR")}{" "}
        {new Date().toLocaleTimeString("pt-BR", { hour12: false })}
      </Text> */}

      <Relogio />

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Entrada 1:"
          style={styles.input}
          value={entrada1}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Saída 1:"
          style={styles.input}
          value={saida1}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Entrada 2:"
          style={styles.input}
          value={entrada2}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Saída 2:"
          style={styles.input}
          value={saida2}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.buttonMarcar} onPress={handleMarcarPonto}>
        <Text style={styles.buttonMarcarText}>Marcar ponto</Text>
      </TouchableOpacity>

      <FooterMenu navigation={navigation} />
    </View>
  );
}
