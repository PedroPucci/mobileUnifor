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
import styles from "./enviarSolicitacao.styles";

export default function EnviarSolicitacaoScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const options = ["Ausência", "Esquecimento"];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const handleEnviarSolicitacao = () => {
    if (!selectedOption) {
      Alert.alert("Erro", "Por favor, selecione o seu caso antes de enviar.");
      return;
    }
    
    if (!mensagem.trim()) {
      Alert.alert("Erro", "Por favor, digite sua solicitação antes de enviar.");
      return;
    }

    Alert.alert("Sucesso", "Solicitação enviada com sucesso!");

    setMensagem("");
    setSelectedOption("");
  };

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

      <TextInput
        style={styles.textAreaPlaceholder}
        multiline
        placeholder="Digite sua solicitação aqui..."
        placeholderTextColor="#999"
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleEnviarSolicitacao}
      >
        <Text style={styles.sendButtonText}>Enviar solicitação</Text>
      </TouchableOpacity>
    </View>
  );
}