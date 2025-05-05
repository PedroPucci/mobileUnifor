import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState(
    new Date().toLocaleTimeString("pt-BR", { hour12: false })
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString("pt-BR", { hour12: false }));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const data = new Date(); // ✅ Agora a variável "data" existe

  return (
    <View style={{ alignItems: "center", marginBottom: 30 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "purple" }}>
        {data.toLocaleDateString("pt-BR")} {horaAtual}
      </Text>
      <Text
        style={{ fontSize: 16, color: "purple", textTransform: "capitalize" }}
      >
        {data.toLocaleDateString("pt-BR", { weekday: "long" })}
      </Text>
    </View>
  );
}