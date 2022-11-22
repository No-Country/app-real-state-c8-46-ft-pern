import { StyleSheet, Text, View } from "react-native";
import MenuTitle from "../../components/Profile/MenuTitle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <MenuTitle title="Notifications" />
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>Sound</Text>
          <MaterialCommunityIcons
            name="toggle-switch"
            size={50}
            style={styles.iconActive}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>Vibrate</Text>
          <MaterialCommunityIcons
            name="toggle-switch"
            size={50}
            style={styles.iconActive}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>New Tips Available</Text>
          <MaterialCommunityIcons
            name="toggle-switch-off"
            size={50}
            style={styles.icon}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.textItem}>New Services Available</Text>
          <MaterialCommunityIcons
            name="toggle-switch-off"
            size={50}
            style={styles.icon}
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
    alignItems:"flex-end"
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

export default Notifications;
