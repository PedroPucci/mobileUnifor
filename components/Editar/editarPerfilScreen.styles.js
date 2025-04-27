import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonVoltar: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  buttonVoltarText: {
    color: "#1877f2",
    fontWeight: "bold",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#333",
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1877f2",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "70%",
  },
  saveButtonText: {
    color: "#1877f2",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
