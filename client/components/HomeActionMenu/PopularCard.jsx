import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
const PopularCard = ({ img, type, price, name, location }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image source={img} style={styles.top} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.typePrice}>
            <Text style={styles.type}>{type}</Text>
            <Text style={styles.price}>{price}/month</Text>
          </View>
          <View style={styles.nameLocation}>
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
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
  top: {
    height: 190,
    width: "90%",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: "white",
    borderColor: "#C6C8CD",
  },
  bottom: {
    height: 140,
    width: "90%",
    // backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#C6C8CD",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  typePrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  nameLocation:{
    display:"flex"
  },
  type:{
    fontSize: 12,
    color:"#2972FE",
    // fontWeight: 500,
    borderWidth: 1.5,
    borderColor: "#2972FE",
    borderRadius: 15,
    paddingHorizontal:8,
    paddingVertical: 5
  }
});
