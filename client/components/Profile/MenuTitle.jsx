import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MenuTitle = ({title}) => {
  const navigation = useNavigation();
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 30,
            marginTop: 30,
            marginBottom:10
          }}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="arrow-back" size={20} color="#2972FE" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 15 }}>
         {title}
        </Text>
      </View>
    )
};

export default MenuTitle;
