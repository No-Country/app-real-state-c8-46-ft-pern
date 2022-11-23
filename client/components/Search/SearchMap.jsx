import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import BottomPopup from '../Modals/Modal'
import { popArr } from "../HomeActionMenu/Popular";
const SearchMap = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState({});


  const onChangeSearch = (query) => setSearchQuery(query);

  const handlerSelectedProperty = (e) => {
    setSelected({
      img: e.img,
      type: e.type,
      price: e.price,
      name: e.name,
      location: e.location,
    });
    setIsModalOpen(!isModalOpen)
  }

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
      >
        {
          popArr.map(e => (<Marker onPress={() => handlerSelectedProperty(e)} key={e.id} coordinate={{ latitude: e.latitude, longitude: e.longitude }} pinColor={"red"} // any color
            title={e.name} />))
        }
      </MapView>
      <BottomPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} info={selected} />
    </View>
  );
};
export default SearchMap;
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
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
