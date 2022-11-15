import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { Entypo, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native-web";

const SearchBar = () => {
  const navigation = useNavigation();
  const house = {
    uri: "https://cdn.icon-icons.com/icons2/2225/PNG/512/home_icon_134474.png",
  };
  const [selectedCity, setSelectedCity] = useState();

  return (
    <View style={{ backgroundColor: "white", marginTop: "30", paddingTop: 20 }}>

      <View style={styles.container}>

        <View style={{ flexDirection: "column" }}>
          <Picker
            style={styles.picker}
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          >
            <Picker.Item label="Location" value="" />
            <Picker.Item label="Doha" value="Doha, Qatar" />
            <Picker.Item label="Quito" value="Quito, Ecuador" />
            <Picker.Item label="Lima" value="Lima, Peru" />
          </Picker>
          <Text>
            <Entypo
              name="location-pin"
              size={30}
              color="#2972FE"
              style={{ padding: 1 }}
            />

            {selectedCity ? selectedCity : "Select city"}
          </Text>
        </View>

        <Octicons
          name="bell-fill"
          size={30}
          color="#2972FE"
          style={styles.icons}
        />
      </View>

      <View style={styles.container}>

      <Search />
      <Octicons name="filter" size={30} color="#2972FE" style={styles.icons} />

      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />
      <Card imagen={house} link={""} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-between",
  },
  picker: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "120",
    borderRadius: 15,
    backgroundColor: "white",
  },
  icons: {
    width: 50,
    height: 50,
    backgroundColor: "#E5EDFE",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
