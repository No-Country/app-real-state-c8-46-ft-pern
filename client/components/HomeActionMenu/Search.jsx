import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Search = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const handleSearch = () => {
  };
  return (
    <View style={styles.container}>
      <View style={clicked ? styles.Search__clicked : styles.Search__unclicked}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        <Feather
          name="search"
          size={20}
          color="#C6C8CD"
          style={{ marginLeft: 1 }}
          onPress={() => handleSearch()}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setClicked(false);
              setSearchPhrase("");
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  Search__unclicked: {
    height: 30,
    width: 250,
    padding: 8,
    flexDirection: "row",
    backgroundColor: "#F4F6F9",
    borderRadius: 15,
    alignItems: "center",
  },
  Search__clicked: {
    height: 30,
    width: 250,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#F4F6F9",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 12,
    width: "85%",
  },
});
