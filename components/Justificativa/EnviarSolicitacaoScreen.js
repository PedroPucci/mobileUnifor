import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import styles from "./enviarSolicitacao.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EnviarSolicitacaoScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  const options = ["Ausência", "Esquecimento"];

  const formatarDataPtBr = (isoDateStr) => {
    const [ano, mes, dia] = isoDateStr.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const handleDayPress = (day) => {
    setDataSelecionada(day.dateString);
    setCalendarVisible(false);
  };

  const handleEnviarSolicitacao = async () => {
    if (!selectedOption || !dataSelecionada || !mensagem.trim()) {
      Alert.alert("Erro", "Preencha todos os campos antes de enviar.");
      return;
    }

    if (mensagem.length < 10) {
      Alert.alert("Erro", "A mensagem deve ter no mínimo 10 caracteres.");
      return;
    }

    if (mensagem.length > 200) {
      Alert.alert("Erro", "A mensagem deve ter no máximo 200 caracteres.");
      return;
    }

    const hoje = new Date();
    const dataSelecionadaObj = new Date(dataSelecionada);
    hoje.setHours(0, 0, 0, 0);
    dataSelecionadaObj.setHours(0, 0, 0, 0);

    if (dataSelecionadaObj > hoje) {
      Alert.alert("Erro", "A data da ocorrência não pode ser no futuro.");
      return;
    }

    const storedId = await AsyncStorage.getItem("userId");
    const payload = {
      pointId: 0,
      userId: parseInt(storedId),
      // date: new Date(dataSelecionada).toISOString(),
      date: `${dataSelecionada}T12:00:00Z`,
      reason: selectedOption + " - " + mensagem,
      status: 1,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetchComTimeout(`${BASE_URL}/justifications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Solicitação enviada com sucesso!");
        setMensagem("");
        setSelectedOption("");
        setDataSelecionada("");
      } else {
        Alert.alert("Erro", data.message || "Erro ao enviar justificativa.");
      }
    } catch (err) {
      const msg =
        err.message === "Tempo limite excedido"
          ? "A conexão está lenta ou instável. Por favor, tente novamente em instantes."
          : "Entre em contato com o suporte para verificar o problema.";
      Alert.alert("Erro de conexão", msg);
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

            <Text style={styles.title}>Enviar Justificativa</Text>

            <Text style={styles.subtitle}>
              Aqui você pode justificar ausências ou esquecimentos relacionados
              ao seu ponto. Preencha os campos com atenção para garantir que sua
              solicitação seja registrada corretamente.
            </Text>

            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.dropdownText}>
                {selectedOption || "Selecione seu caso"}
              </Text>
              <Feather name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>

            <Modal
              visible={modalVisible}
              transparent
              animationType="fade"
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPressOut={() => setModalVisible(false)}
              >
                <View style={styles.modalContent}>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionButton}
                      onPress={() => handleSelectOption(option)}
                    >
                      <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableOpacity>
            </Modal>

            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setCalendarVisible(true)}
            >
              <Text style={styles.dropdownText}>
                {dataSelecionada
                  ? `Data: ${formatarDataPtBr(dataSelecionada)}`
                  : "Escolha a data"}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={calendarVisible}
              transparent
              animationType="fade"
              onRequestClose={() => setCalendarVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPressOut={() => setCalendarVisible(false)}
              >
                <View style={styles.calendarModalContent}>
                  <Calendar
                    onDayPress={handleDayPress}
                    monthFormat={"MMMM yyyy"}
                    firstDay={1}
                    hideExtraDays={false}
                    renderHeader={(date) => {
                      const meses = [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto",
                        "Setembro",
                        "Outubro",
                        "Novembro",
                        "Dezembro",
                      ];
                      return (
                        <View style={styles.headerCalendar}>
                          <Text style={styles.headerText}>
                            {meses[date.getMonth()]} {date.getFullYear()}
                          </Text>
                        </View>
                      );
                    }}
                    theme={{
                      backgroundColor: "#fff",
                      calendarBackground: "#fff",
                      todayTextColor: "#1877f2",
                      arrowColor: "#1877f2",
                      textDayFontWeight: "bold",
                      textMonthFontWeight: "bold",
                      textDayHeaderFontWeight: "bold",
                      textDayStyle: { fontSize: 16 },
                      textMonthStyle: { fontSize: 18 },
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Modal>

            <TextInput
              style={styles.textAreaPlaceholder}
              multiline
              placeholder="Digite sua solicitação aqui..."
              placeholderTextColor="#999"
              value={mensagem}
              onChangeText={(text) => setMensagem(text)}
              maxLength={500}
            />

            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleEnviarSolicitacao}
            >
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <FooterMenu navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}