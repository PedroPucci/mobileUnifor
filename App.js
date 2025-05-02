import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/Login/LoginScreen";
import RegisterScreen from "./components/Register/RegisterScreen";
import RecuperarSenhaScreen from "./components/RecuperarSenha/RecuperarSenhaScreen";
import HomeScreen from "./components/Home/HomeScreen";
import EditarPerfilScreen from "./components/Editar/EditarPerfilScreen";
import EnviarSolicitacaoScreen from "./components/Justificativa/EnviarSolicitacaoScreen";
import MarcarPontoScreen from "./components/RegistroPonto/MarcarPontoScreen";
import FrequenciaScreen from "./components/Frequencia/FrequenciaScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Entrar" component={LoginScreen} />
          <Stack.Screen name="Registrar" component={RegisterScreen} />
          <Stack.Screen
            name="RecuperarSenha"
            component={RecuperarSenhaScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
          <Stack.Screen name="MarcarPonto" component={MarcarPontoScreen} />
          <Stack.Screen name="Frequencia" component={FrequenciaScreen} />
          <Stack.Screen
            name="EnviarSolicitacao"
            component={EnviarSolicitacaoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
