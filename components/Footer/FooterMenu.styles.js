import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const footerStyles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    height: 60,
    backgroundColor: "#1877f2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: "#ffffff55",
  },
});

export default footerStyles;
