import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  FontAwesome5,
  AntDesign,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Menu = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("EditProfile")}
        >
          <FontAwesome5 style={styles.icon} name="user-alt" size={20} />
          <Text style={styles.text}>Edit Profile</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("Notifications")}
        >
          <FontAwesome5 style={styles.icon} name="bell" size={20} />
          <Text style={styles.text}>Notification</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("Security")}
        >
          <Fontisto style={styles.icon} name="locked" size={20} />
          <Text style={styles.text}>Security</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("Appearance")}
        >
          <Fontisto style={styles.icon} name="eye" />
          <Text style={styles.text}>Appearance</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>

      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("Rents")}
        >
          <MaterialCommunityIcons style={styles.icon} name="table-key" size={20} />
          <Text style={styles.text}>Rents</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>

      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => navigation.navigate("Help")}
        >
          <MaterialIcons style={styles.icon} name="info" size={20} />
          <Text style={styles.text}>Help</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
 
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionChild}
          onPress={() => logout()}
        >
          <MaterialCommunityIcons
            style={{
              padding: 15,
              color: "red",
              backgroundColor: "#E5EDFE",
              borderRadius: 50,
            }}
            name="logout-variant"
            size={20}
          />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "column" },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionChild: { display: "flex", flexDirection: "row", alignItems: "center" },
  text: { fontSize: 18, paddingVertical: 10, paddingLeft: 10 },
  icon: {
    padding: 15,
    color: "#2972FE",
    backgroundColor: "#E5EDFE",
    borderRadius: 50,
  },
  icon1: {
    padding: 10,
    color: "#2972FE",
  },
});
