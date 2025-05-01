import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import styles from "./enviarSolicitacao.styles";
import FooterMenu from "../Footer/FooterMenu";

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

  const handleEnviarSolicitacao = () => {
    if (!selectedOption) {
      Alert.alert("Erro", "Por favor, selecione o seu caso antes de enviar.");
      return;
    }

    if (!dataSelecionada) {
      Alert.alert("Erro", "Por favor, selecione a data da ocorrência.");
      return;
    }

    if (!mensagem.trim()) {
      Alert.alert("Erro", "Por favor, digite sua solicitação antes de enviar.");
      return;
    }

    if (!dataSelecionada) {
      Alert.alert("Erro", "Por favor, selecione a data da ocorrência.");
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

    Alert.alert("Sucesso", "Solicitação enviada com sucesso!");
    setMensagem("");
    setSelectedOption("");
    setDataSelecionada("");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonVoltarText}>Voltar ao ínicio</Text>
      </TouchableOpacity>
      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Enviar Justificativa</Text>

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
                const mes = meses[date.getMonth()];
                const ano = date.getFullYear();
                return (
                  <View style={styles.headerCalendar}>
                    <Text style={styles.headerText}>
                      {mes} {ano}
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
        style={[
          styles.textAreaPlaceholder,
          erroMensagem ? { borderColor: "red", borderWidth: 1 } : null,
        ]}
        multiline
        placeholder="Digite sua solicitação aqui..."
        placeholderTextColor="#999"
        value={mensagem}
        onChangeText={(text) => {
          setMensagem(text);

          if (text.length < 10) {
            setErroMensagem("A mensagem deve ter no mínimo 10 caracteres.");
          } else if (text.length > 200) {
            setErroMensagem("A mensagem deve ter no máximo 200 caracteres.");
          } else {
            setErroMensagem("");
          }
        }}
        maxLength={500}
      />
      {erroMensagem !== "" && (
        <Text style={{ color: "red", marginTop: 4 }}>{erroMensagem}</Text>
      )}
      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleEnviarSolicitacao}
      >
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
      <FooterMenu navigation={navigation} />
    </View>
  );
}
