import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import RecuperarSenhaScreen from "./RecuperarSenhaScreen";
import HomeScreen from "./HomeScreen";

// import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Entrar" component={LoginScreen} />
        <Stack.Screen name="Registrar" component={RegisterScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Home" component={HomeTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
