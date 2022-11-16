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

        <View style={styles.div1}>
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
        <View>
        <Entypo
              name="location-pin"
              size={30}
              color="#2972FE"
              style={{ padding: 1 }}
            />

          <Text >
            {selectedCity ? selectedCity : "Select city"}
          </Text>
        </View>
        </View>
        <View style={styles.div2}>

          <Octicons
            name="bell-fill"
            size={30}
            color="#2972FE"
            style={styles.icons}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.div1}>
          <Search />
        </View>
        <View style={styles.div2}>

          <Octicons name="filter" size={30} color="#2972FE" style={styles.icons} />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12,1fr)",
    gridTemplateRows: "repeat(3,1fr)"
  },
  div1: {
    display: "grid",
    gridArea: "1/2/3/10"
  },
  div2: {
    display: "grid",
    gridArea: "1/11/3/12"
  },
  picker: {
    margin: 8,

    width: "40%",
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
  city: {

  }
});
