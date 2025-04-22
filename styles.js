import { StyleSheet } from "react-native";
const cor_fundo = "white";

const styles = StyleSheet.create({
  container_principal: {
    flex: 1,
    backgroundColor: cor_fundo,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
    width: "90%",
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
  },

  icon: {
    marginRight: 5,
  },

  content: {
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "purple",
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  texto_botao: {
    color: "white",
    fontSize: 15,
  },

  botao_azul: {
    backgroundColor: "#1877f2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  texto_botao_branco: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  inputPass: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "90%",
  },

  container_contato: {
    flex: 1,
    padding: 20,
    backgroundColor: cor_fundo,
  },

  container_icone_voltar_contato: {
    alignItems: "flex-start",
  },

  view_texto_contato: {
    alignItems: "center",
  },

  texto_contato: {
    color: "purple",
    fontWeight: "bold",
    padding: 10,
    fontSize: 25,
  },

  input_contato: {
    height: 40,
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },

  input_contato_scrowlView: {
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },

  textarea: {
    height: 150,
    textAlignVertical: "top",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;