import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import { View, Text } from "react-native";

function PlaceholderScreen({ name }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1877f2",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "Início") icon = "home";
          else if (route.name === "Alertas") icon = "alert-circle";
          else if (route.name === "Registro") icon = "clock";
          else if (route.name === "Calendário") icon = "calendar";
          else if (route.name === "Perfil") icon = "user";
          return <Feather name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen
        name="Alertas"
        children={() => <PlaceholderScreen name="Alertas" />}
      />
      <Tab.Screen
        name="Registro"
        children={() => <PlaceholderScreen name="Registro de Frequência" />}
      />
      <Tab.Screen
        name="Calendário"
        children={() => <PlaceholderScreen name="Calendário" />}
      />
      <Tab.Screen
        name="Perfil"
        children={() => <PlaceholderScreen name="Perfil" />}
      />
    </Tab.Navigator>
  );
}
