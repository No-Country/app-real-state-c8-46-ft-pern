import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome5,
  AntDesign,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Menu = () => {
  return (
    <View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <FontAwesome5 style={styles.icon} name="user-alt" size={20} />
          <Text style={styles.text}>Edit Profile</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <FontAwesome5 style={styles.icon} name="bell" size={20} />
          <Text style={styles.text}>Notification</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <Fontisto style={styles.icon} name="locked" size={20} />
          <Text style={styles.text}>Security</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <Fontisto style={styles.icon} name="eye" />
          <Text style={styles.text}>Appearance</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <MaterialIcons style={styles.icon} name="info" size={20} />
          <Text style={styles.text}>Help</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
        >
          <FontAwesome5 style={styles.icon} name="user-friends" size={20} />
          <Text style={styles.text}>Invite Friends</Text>
        </View>
        <AntDesign style={styles.icon1} name="right" size={20} />
      </View>
      <View style={styles.section}>
        <View
          style={styles.sectionChild}
          onStartShouldSetResponder={() => alert("se te perdió algo?")}
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
        </View>
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
