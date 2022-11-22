import { StyleSheet, Text, View } from "react-native";
import MenuTitle from "../../components/Profile/MenuTitle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Appearance = () => {
  return (
    <View style={styles.container}>
      <MenuTitle title="Appearance" />
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>Dark Mode</Text>
          <MaterialCommunityIcons
            name="toggle-switch-off"
            size={50}
            style={styles.icon}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>Blur Background</Text>
          <MaterialCommunityIcons
            name="toggle-switch"
            size={50}
            style={styles.iconActive}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>Full Screen Mode</Text>
          <MaterialCommunityIcons
            name="toggle-switch"
            size={50}
            style={styles.iconActive}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  menuContainer: { marginTop: 20, marginHorizontal: 10 },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  textItem: {
    color: "black",
    marginBottom: 20,
    fontWeight: "00",
    fontSize: 14,
  },
  icon: {
    color: "gray",
  },
  iconActive: { color: "#2972FE" },
});

export default Appearance;
