import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const MenuItem = ({ text, navigate }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.section}>
      <View
        style={styles.sectionChild}
        onStartShouldSetResponder={() => navigation.navigate(`${navigate}`)}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
      <AntDesign style={styles.icon1} name="right" size={20} />
    </View>
  );
};

export default MenuItem;
const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sectionChild: { display: "flex", flexDirection: "row", alignItems: "center" },
  text: { fontSize: 16, paddingVertical: 5, paddingLeft: 10 },
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
