import { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Search from "./Search";
import { Entypo, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

const SearchBar = () => {
  const navigation = useNavigation();
  const house = {
    uri: "https://cdn.icon-icons.com/icons2/2225/PNG/512/home_icon_134474.png",
  };
  const [selectedCity, setSelectedCity] = useState();
  const [userData, setUserData] = useState({});
  const {userInfo} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <Picker
            style={styles.picker}
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          >
            <Picker.Item style={styles.pickerItem} label="Location" value="" />
            <Picker.Item
              style={styles.pickerItem}
              label="Doha"
              value="Doha, Qatar"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Quito"
              value="Quito, Ecuador"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Lima"
              value="Lima, Peru"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Surabaya"
              value="Surabaya, Indonesia"
            />
          </Picker> */}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 15,
              marginRight: 14,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <Entypo
                name="location-pin"
                size={20}
                color="#2972FE"
                style={{ padding: 1 }}
              />

              <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 5 }}>
                {selectedCity ? selectedCity : "Select a location"}
              </Text> */}
              <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 5 }}>
                {userInfo.response ? `Hello ${userInfo.response.firstName} ${userInfo.response.lastName}` : `Hello Prueba Prueba`}
              </Text>
            </View>
            <View style={styles.icons}>
              <Octicons name="bell-fill" size={20} color="#2972FE" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.div2}>
        <Search />

        <View style={styles.icons}>
          <Octicons name="filter" size={20} color="#2972FE" />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    display: "flex",
  },

  div1: {
    display: "flex",
    marginBottom: 5,
  },
  div2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  picker: {
    marginLeft: 14,
    width: "40%",
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 0,
  },
  pickerItem: {
    fontSize: 12,
    fontWeight: "400",
  },
  icons: {
    width: 48,
    height: 48,
    backgroundColor: "#E5EDFE",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  city: {},
});
