import { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const SearchBar = () => {
  const navigation = useNavigation();
  const house = {
    uri: "https://cdn.icon-icons.com/icons2/2225/PNG/512/home_icon_134474.png",
  };
  const [selectedCity, setSelectedCity] = useState();
  // const [cities, setCities] = useState([]);
  //   let apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  //   useEffect(() => {
  //     async function success(pos) {
  //       var crd = pos.coords;
  //       const data = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`
  //       );
  //       const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${data.data.name}&appid=${apiKey}&units=metric`)
  //       const recurse = res.data;
  //       const ciudad = {
  //         name: recurse.name,
  //         country: recurse.sys.country,
  //         id: recurse.id,
  //       };
  //       setCities(oldCities => [ciudad]);
  //     }
  //     navigator.geolocation.getCurrentPosition(success)
  //   }, []);

  useEffect(()=> {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Location",
      headerSearchBarOptions:{
        placeholder: "Search"
      }
    })
  })
  return (
    <ScrollView>
      <Picker
        style={{width:'200px'}}
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Doha" value="Doha, Qatar" />
        <Picker.Item label="Quito" value="Quito, Ecuador" />
        <Picker.Item label="Lima" value="Lima, Peru" />
      </Picker>
      <Text>{selectedCity}</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Search />

      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />


    </ScrollView>
  );
};

export default SearchBar;
