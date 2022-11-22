import { Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
const HelpBigButton = ({ icon, color, title }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 110,
        height: 110,
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        margin: 20,
      }}
    >
      <Foundation name={icon} size={40} color="white" />
      <Text color="white">{title}</Text>
    </View>
  );
};

export default HelpBigButton;
