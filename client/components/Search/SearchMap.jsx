import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import BottomPopup from '../Modals/Modal'

const SearchMap = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen,setIsModalOpen] = useState(true);

  const onChangeSearch = (query) => setSearchQuery(query);


   

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginTop: 25 }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TouchableOpacity onPress={()=>setIsModalOpen(!isModalOpen)}><Text>open/close</Text></TouchableOpacity>
    <BottomPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </View>
  );
};
export default SearchMap;
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "80%",
  },
  menu: {
    width: "100%",
    height: "40%",
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
// <View style={styles.menu}>
// <Image
//   source={{
//     uri: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
//   }}
//   style={{
//     width: "100%",
//     height: "40%",
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   }}
// />
// <View style={styles.typePrice}>
//   <Text style={styles.type}>Apartment</Text>
//   <View style={styles.price}>
//     <Text style={{ fontSize: 16, color: "#2972FE", fontWeight: "600" }}>
//       $1,800{" "}
//     </Text>
//     <Text style={{ fontSize: 10, color: "#C6C8CD" }}>/month</Text>
//   </View>
// </View>
// <Text
//   style={{ fontSize: 18, fontWeight: "600", paddingHorizontal: 15 }}
// >
//   Owent Apartment
// </Text>
// <Text style={{ fontSize: 10, paddingLeft: 15 }}>
//   <Entypo
//     name="location-pin"
//     size={14}
//     color="#2972FE"
//     style={{ padding: 1 }}
//   />
//   Surubaya, Indonesia
// </Text>
// </View>