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
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingBottom: 120,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  tituloCadastro: {
    fontSize: 22,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
  subTituloCadastro: {
    fontSize: 17,
    fontWeight: "bold",
    color: "purple",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default styles;
