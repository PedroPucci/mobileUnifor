import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 30,
  },
  forgot: {
    color: "#1877f2",
    alignSelf: "flex-end",
    marginTop: -10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tituloLogin: {
    fontSize: 22,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
  subTituloLogin: {
    fontSize: 17,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default styles;
