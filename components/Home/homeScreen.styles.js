import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 80,
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  logoutText: {
    marginLeft: 5,
    color: "#1877f2",
    fontWeight: "bold",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    marginVertical: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1877f2",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  navItem: {
    padding: 10,
  },
  active: {
    backgroundColor: "#0f62d0",
    borderRadius: 10,
  },
});

export default styles;
