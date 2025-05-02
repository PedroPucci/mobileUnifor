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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 10,
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    textAlign: "justify",
  },
  tipBox: {
    backgroundColor: "#eaf4ff",
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },
  tipText: {
    fontSize: 14,
    color: "#1a73e8",
  },
});

export default styles;
