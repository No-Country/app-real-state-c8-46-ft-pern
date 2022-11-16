import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const PopularCard = ({ img, type, price, name, location }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
        <View>
          <Image source={{uri:img}} style={styles.top} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.typePrice}>
            <Text style={styles.type}>{type}</Text>
            <View style={styles.price}>
              <Text style={{ fontSize: 16, color: "#2972FE", fontWeight: '600' }}>
                {price}{" "}
              </Text>
              <Text style={{ fontSize: 10, color: "#C6C8CD" }}>/month</Text>
            </View>
          </View>
          <View style={styles.nameLocation}>
            <Text style={{ fontSize: 18, fontWeight: '600', padding: 10 }}>
              {name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 10, paddingLeft: 10 }}>
                <Entypo
                  name="location-pin"
                  size={14}
                  color="#2972FE"
                  style={{ padding: 1 }}
                />
                {location}
              </Text>
              <AntDesign name="hearto" size={16} color="#2972FE" style={{paddingRight:10}} />
            </View>
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

    paddingLeft: 10,
    margin: 10,
  },
  top: {
    height: 190,
    width: 220,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    borderColor: "#C6C8CD",
  },
  bottom: {
    height: 110,
    width: 220,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#C6C8CD",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  typePrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  nameLocation: {
    display: "flex",
  },
  type: {
    fontSize: 10,
    color: "#2972FE",
    // fontWeight: 500,
    borderWidth: 1.5,
    borderColor: "#2972FE",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
