import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
// id: 1,
//     imgContainer: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
//     type: "Apartment",
//     price: "$1,800",
//     name: "Owent Apartment",
//     location: "Surabaya, Indonesia",

const Details = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: 400, width: "100%", position: "relative" }}
        source={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5"
        }
      >
        <View style={styles.imgContainer}>
          <Ionicons name="arrow-back" size={20} style={styles.iconUp} />
          <AntDesign name="hearto" size={20} style={styles.iconUp} />
        </View>
      </ImageBackground>
      <View style={styles.info}>
        <View style={styles.typereview}>
          <Text style={styles.type}>Apartment</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AntDesign name="star" size={18} color="yellow" />
            <Text style={{ fontWeight: 600 }}> 4.5 (1.265 reviews) </Text>
          </View>
        </View>
        <View style={styles.nameLocation}>
          <Text style={{ fontSize: 20, fontWeight: 600, paddingVertical:10}}>
            Owent Apartment
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15 
            }}
          >
            <Entypo name="location-pin" size={15} color="#2972FE" />
            <Text style={{ fontWeight: 300}}>
              Sudirman St. 169, Surabaya, Indonesia
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "15",
            }}
          >
            <FontAwesome name="bed" size={15} color="#2972FE" />
            <Text style={styles.bedBath}>4 Beds</Text>

            <FontAwesome name="bath" size={15} color="#2972FE" />
            <Text style={styles.bedBath}>2 Bath</Text>

            <MaterialIcons name="square-foot" size={15} color="#2972FE" />
            <Text style={styles.bedBath}>1,928 sqft</Text>
          </View>
        </View>
        <View style={styles.nameOwner}></View>
        <View style={styles.overview}></View>
        <View style={styles.gallery}></View>
        <View style={styles.location}></View>
        <View style={styles.featuresFac}></View>
        <View style={styles.price}></View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  info: {
    marginHorizontal: 20,
  },
  iconUp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#2972FE",
    fontWeight: 600,
    backgroundColor: "#E5EDFE",
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  typereview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
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
  bedBath: {
    marginLeft: -15,
  },
});
