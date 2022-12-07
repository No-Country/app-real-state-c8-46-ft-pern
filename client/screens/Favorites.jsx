import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ----------------------------- HEADER ---------------- */}
      <View style={styles.header}>
        <View style={styles.fav}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>Favorite</Text>
        </View>
        <View style={styles.icon}>
          <View style={styles.icons}>
            <Feather name="search" size={20} color="#2972FE" />
          </View>
          <View style={styles.icons}>
            <Ionicons name="filter" size={20} color="#2972FE" />
          </View>
        </View>
      </View>
      {/* -------------------------- BUTTONS ----------------------- */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Villa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Apartment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sad_area}>
        <View style={styles.sad}>
          <Ionicons name="sad-outline" size={50} color="white" />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "#2972FE",
            fontWeight: "650",
            marginTop: 20,
          }}
        >
          You don't have a favorite yet
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    width: 40,
    height: 40,
    backgroundColor: "#E5EDFE",
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 2,
    height: 30,
    width: 85,
    backgroundColor: "#E5EDFE",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2972FE",
    borderWidth: 1,
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  btntxt: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: "#2972FE",
  },
  sad: {
    backgroundColor: "#2972FE",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sad_area: {
    width: "100%",
    height: 555,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
