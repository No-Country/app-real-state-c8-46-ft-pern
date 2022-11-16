import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Card = ({ font, name, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.circle}>
          {font === "Fontisto" ? (
            <Fontisto name={name} size={30} style={styles.icon} />
          ) : (
            <MaterialIcons name={name} size={30} style={styles.icon} />
          )}
        </View>
        <Text >{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    width: 110,
    height: 180,
    borderColor: "#F4F6F9",
    borderWidth: 3,
    marginLeft:4,
    marginRight:4,
    marginTop: -20
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#E5EDFE",
    borderRadius: 50,
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  },
  icon: {
    color: "#2972FE",
  },
});
