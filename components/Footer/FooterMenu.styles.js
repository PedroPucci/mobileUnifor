import { StyleSheet, Dimensions, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

const { width } = Dimensions.get("window");

const footerStyles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    height: 90, 
    backgroundColor: "#1877f2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    zIndex: 999,
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