import { Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
const HelpBigButton = ({ icon, color, title }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 140,
        height: 120,
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        margin: 10,
      }}
    >
      <Foundation name={icon} size={60} color="white" />
      <Text style={{color:"white", fontWeight:"700", marginTop:10, fontSize:16}}>{title}</Text>
    </View>
  );
};

export default HelpBigButton;
