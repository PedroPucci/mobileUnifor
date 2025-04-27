import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "./frequenciaScreen.styles";

export default function FrequenciaScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonVoltarText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.calendarCard}>
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
            backgroundColor: "#f9f9f9",
            calendarBackground: "#f9f9f9",
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

      <View style={styles.questionContainer}>
        <TouchableOpacity
          style={styles.tooltipButton}
          onPress={() => setTooltipVisible(true)}
        >
          <Image
            source={require("../../assets/question.png")}
            style={styles.questionIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={tooltipVisible}
        animationType="fade"
        onRequestClose={() => setTooltipVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setTooltipVisible(false)}
        >
          <View style={styles.tooltipBox}>
            <Text style={styles.tooltipTitle}>Legenda</Text>
            <View style={styles.separator} />

            <View style={styles.legendItem}>
              <View style={[styles.colorDot, { backgroundColor: "red" }]} />
              <Text style={styles.legendText}>Ponto não registrado</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={[styles.colorDot, { backgroundColor: "blue" }]} />
              <Text style={styles.legendText}>Presença 100%</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={[styles.colorDot, { backgroundColor: "gold" }]} />
              <Text style={styles.legendText}>Pendente de aprovação</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Frequência do mês:{"\n"}
          <Text style={styles.boldText}>100% (49h/49h)</Text>
        </Text>

        <Text style={[styles.infoText, { marginTop: 20 }]}>
          Frequência do dia:{"\n"}
          <Text style={styles.boldText}>36% (2h30m/7h)</Text>
        </Text>
      </View>
    </View>
  );
}
