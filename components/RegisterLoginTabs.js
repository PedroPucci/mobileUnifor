// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default function RegisterLoginTabs({ onTabChange }) {
//   const [selectedTab, setSelectedTab] = useState("Registrar");

//   const handleTabPress = (tab) => {
//     setSelectedTab(tab);
//     onTabChange(tab);
//   };

//   return (
//     <View style={styles.tabContainer}>
//       <TouchableOpacity
//         style={[styles.tabButton, selectedTab === "Entrar" && styles.activeTab]}
//         onPress={() => handleTabPress("Entrar")}
//       >
//         <Text
//           style={[
//             styles.tabText,
//             selectedTab === "Entrar" && styles.activeText,
//           ]}
//         >
//           Entrar
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[
//           styles.tabButton,
//           selectedTab === "Registrar" && styles.activeTab,
//         ]}
//         onPress={() => handleTabPress("Registrar")}
//       >
//         <Text
//           style={[
//             styles.tabText,
//             selectedTab === "Registrar" && styles.activeText,
//           ]}
//         >
//           Registrar
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabContainer: {
//     flexDirection: "row",
//     backgroundColor: "#f2f2f2",
//     borderRadius: 8,
//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   tabText: {
//     fontSize: 14,
//     color: "#555",
//   },
//   activeTab: {
//     backgroundColor: "#fff",
//   },
//   activeText: {
//     fontWeight: "bold",
//     color: "#2b2b2b",
//   },
// });

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RegisterLoginTabs({
  selected = "Registrar",
  onTabChange,
}) {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        style={[styles.tab, selected === "Entrar" && styles.activeTab]}
        onPress={() => onTabChange("Entrar")}
      >
        <Text style={selected === "Entrar" ? styles.activeText : styles.text}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, selected === "Registrar" && styles.activeTab]}
        onPress={() => onTabChange("Registrar")}
      >
        <Text
          style={selected === "Registrar" ? styles.activeText : styles.text}
        >
          Registrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    color: "#888",
  },
  activeText: {
    fontWeight: "bold",
    color: "#000",
  },
});
