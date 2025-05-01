import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
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
    marginTop: 10,
    marginBottom: 20,
  },
  calendarCard: {
    marginTop: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  headerCalendar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
  tooltipButton: {
    marginRight: 10,
  },
  questionIcon: {
    width: 30,
    height: 30,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  tooltipBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    minWidth: 100,
    alignItems: "center",
  },
  tooltipText: {
    fontSize: 16,
    color: "#333",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 18,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
  },
  tooltipBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    minWidth: 220,
    alignItems: "flex-start",
  },

  tooltipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    marginBottom: 10,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 15,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  legendText: {
    fontSize: 16,
    color: "#333",
  },
});