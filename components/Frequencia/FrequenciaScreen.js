import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "./frequenciaScreen.styles";
import FooterMenu from "../Footer/FooterMenu";
import BackToHomeButton from "../BackToHome/BackToHomeButton";
import moment from "moment";
import { BASE_URL, fetchComTimeout } from "../../config/apiConfig";

export default function FrequenciaScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const statusColors = {
    1: "gold",
    3: "blue",
    4: "red",
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        const userId = 4;
        const response = await fetchComTimeout(
          `${BASE_URL}/points/user/${userId}`
        );

        if (!response.ok) {
          console.warn("Nenhuma resposta válida recebida.");
          setMarkedDates({});
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Resposta não é JSON.");
          setMarkedDates({});
          return;
        }

        const pontos = await response.json();

        const hoje = moment();
        const mesAtual = hoje.month();
        const anoAtual = hoje.year();

        const markings = {};

        pontos.forEach((ponto) => {
          //const data = moment(ponto.date);
          const data = moment(ponto.date);
          if (
            data.month() === mesAtual &&
            data.year() === anoAtual &&
            data.isSameOrBefore(hoje, "day")
          ) {
            const cor = statusColors[ponto.status];
            if (cor) {
              markings[data.format("YYYY-MM-DD")] = {
                customStyles: {
                  container: {
                    backgroundColor: cor,
                    borderRadius: 4,
                  },
                  text: {
                    color: "white",
                    fontWeight: "bold",
                  },
                },
              };
            }
          }
        });

        setMarkedDates(markings);
      } catch (error) {
        console.error("Erro ao carregar pontos:", error);
        setMarkedDates({});
      }
    };

    fetchPontos();
  }, []);

  return (
    <View style={styles.container}>
      <BackToHomeButton navigation={navigation} />

      <Image
        source={require("../../assets/logo6.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Painel de Frequência</Text>
      <Text style={styles.subtitle}>
        Acompanhe os registros de ponto do mês
      </Text>

      <View style={styles.calendarCard}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={markedDates}
          markingType={"custom"}
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 10,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <View style={[styles.colorDot, { backgroundColor: "red" }]} />
          <Text style={{ fontSize: 12 }}>Ponto não registrado</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <View style={[styles.colorDot, { backgroundColor: "blue" }]} />
          <Text style={{ fontSize: 12 }}>Presença 100%</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <View style={[styles.colorDot, { backgroundColor: "gold" }]} />
          <Text style={{ fontSize: 12 }}>Pendente de aprovação</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.infoText}>
            Frequência do mês:{"\n"}
            <Text style={styles.boldText}>100% (49h/49h)</Text>
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.infoText}>
            Frequência do dia:{"\n"}
            <Text style={styles.boldText}>36% (2h30m/7h)</Text>
          </Text>
        </View>
      </View>

      <FooterMenu navigation={navigation} />
    </View>
  );
}