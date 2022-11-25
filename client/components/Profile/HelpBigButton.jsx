import { Text, View } from "react-native";
import {
  Foundation,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
//AntDesign youtube instagram twitter
//MaterialCommunityIcons website

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
        justifyContent: "center",
        margin: 10,
      }}
    >
      {icon === "earth" ? (
        <MaterialCommunityIcons name={icon} size={60} color="white" />
      ) : (
        <AntDesign name={icon} size={60} color="white" />
      )}
      <Text
        style={{
          color: "white",
          fontWeight: "700",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default HelpBigButton;
