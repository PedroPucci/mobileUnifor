import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function InputWithIcon({
  placeholder,
  icon,
  secureText,
  value,
  onChangeText,
}) {
  const [secure, setSecure] = useState(secureText || false);

  return (
    <View style={styles.inputContainer}>
      <Feather name={icon} size={20} color="#999" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
      />
      {secureText !== undefined && (
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <MaterialIcons
            name={secure ? "visibility-off" : "visibility"}
            size={20}
            color="#999"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
