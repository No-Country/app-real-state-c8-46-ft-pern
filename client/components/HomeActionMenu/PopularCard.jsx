import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
const PopularCard = ({ img, type, price, name, location }) => {
  return (
    <View>
      <View>
        <Image source={img} />
      </View>
      <TouchableOpacity>
        <Text>{type}</Text>
        <Text>{price}/month</Text>
        <Text>{name}</Text>
        <Text>
          <Entypo
            name="location-pin"
            size={10}
            color="#2972FE"
            style={{ padding: 1 }}
          />
          {location}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
    container:{},
    image:{},
    description:{},
    
})