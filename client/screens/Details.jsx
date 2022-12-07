import {
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { confirmRent } from "../redux/actions/rentActions";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// id: 1,
//     imgContainer: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
//     type: "Apartment",
//     price: "$1,800",
//     name: "Owent Apartment",
//     location: "Surabaya, Indonesia",

const Details = (currentProp) => {
  const navigation = useNavigation();

  let img = currentProp.route.params.img;
  let location = currentProp.route.params.location;
  let type = currentProp.route.params.type;
  let name = currentProp.route.params.name;
  let price = currentProp.route.params.price;
  let area = currentProp.route.params.area;
  let baths = currentProp.route.params.baths;
  let rooms = currentProp.route.params.rooms;
  let id = currentProp.route.params.id;
  let lng = currentProp.route.params.lng;
  let owner = currentProp.route.params.owner;

  const dispatch = useDispatch();

  const createTwoButtonAlert = () =>
    Alert.alert("Confirm Rent", "Are you sure you want to rent this property?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Confirm", onPress: () => handleRent() },
    ]);

  const { userToken } = useContext(AuthContext);

  const handleRent = async () => {
    console.log(id);
    console.log(userToken);
    dispatch(confirmRent(id, userToken));
    console.log("confirm rent");
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={{ height: 400, width: "100%", position: "relative" }}
          source={{
            uri: img,
          }}
        >
          <View style={styles.imgContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeActionMenu")}
            >
              <View style={styles.iconUp}>
                <Ionicons name="arrow-back" size={20} color="#2972FE" />
              </View>
            </TouchableOpacity>
            <View style={styles.iconUp}>
              <AntDesign name="hearto" size={20} color="#2972FE" />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.info}>
          <View style={styles.typereview}>
            <Text style={styles.type}>{type}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <AntDesign name="star" size={18} color="yellow" />
              <Text style={{ fontWeight: "600" }}> 4.5 (1.265 reviews) </Text>
            </View>
          </View>
          <View style={styles.nameLocation}>
            <Text
              style={{ fontSize: 20, fontWeight: "600", paddingVertical: 10 }}
            >
              {name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Entypo name="location-pin" size={15} color="#2972FE" />
              <Text style={{ fontWeight: "300" }}>{location}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15,
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
          {/* ----------------------OWNER INFO-------------------------------- */}
          <View style={styles.nameOwner}>
            <Image
              source={{
                uri: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
              }}
              style={styles.profile}
            />
            <View>
              <Text style={{ fontWeight: "600" }}>{owner}</Text>
              <Text>Partner</Text>
            </View>
            <MaterialIcons name="message" size={20} color="#2972FE" />
            <FontAwesome name="phone" size={20} color="#2972FE" />
          </View>
          {/* ---------------------OVERVIEW--------------------------------- */}

          <View style={styles.overview}>
            <Text style={styles.title}>Overview</Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              provident temporibus eligendi minus sunt ratione excepturi dolorum
              nulla eos modi explicabo totam aliquid eius obcaecati expedita
              <Text
                color="#2972FE"
                style={{ fontWeight: "700", color: "#2972FE" }}
              >
                {" "}
                Read more...
              </Text>
            </Text>
          </View>
          <View style={styles.gallery}>
            <Image
              style={styles.imgGallery}
              source={{
                uri: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
              }}
            />
            <Image
              style={styles.imgGallery}
              source={{
                uri: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/244766781/cd5fae5b8e8e4daf83e80141390ff9ba",
              }}
            />
            <Image
              style={styles.imgGallery}
              source={{
                uri: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
              }}
            />
          </View>
          {/* --------------------- LOCATION --------------------------------- */}

          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>Location</Text>
            <Image
              source={{
                uri: "https://miracomohacerlo.com/wp-content/uploads/2019/01/corregir-ubicacion-google-maps-2.jpg",
              }}
              style={{ borderRadius: 20, width: 360, height: 200 }}
            />
          </View>
          {/* --------------------- FEATURES --------------------------------- */}

          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>Features & Facilities</Text>
            <View style={styles.features}>
              <Text style={styles.feature}>Area & Lot</Text>
              <Text style={styles.feature}>Interior</Text>
              <Text style={styles.feature}>Exterior</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Status</Text>
              <Text style={styles.fac2}>For Sale</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Living Area</Text>
              <Text style={styles.fac2}>1,938 sqft</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Type</Text>
              <Text style={styles.fac2}>Modern</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Year Built</Text>
              <Text style={styles.fac2}>2014</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Lifestyles</Text>
              <Text style={styles.fac2}>Futuristic</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>Architecture Styles</Text>
              <Text style={styles.fac2}>Contemporary</Text>
            </View>
            <View style={styles.facilities}>
              <Text style={styles.fac1}>View Description</Text>
              <Text style={styles.fac2}>Urban</Text>
            </View>
          </View>

          {/* --------------------- PRICE --------------------------------- */}
          <View style={styles.price}>
            <View style={styles.priceMenu}>
              <Text style={{ fontSize: 12, fontWeight: "300" }}>Price</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 24, fontWeight: "700", color: "#2972FE" }}
                >
                  {price}{" "}
                </Text>
                <Text style={{ fontSize: 14 }}>/month</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: "55%",
                height: 40,
                borderRadius: 25,
                backgroundColor: "#2972FE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => createTwoButtonAlert()}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
                Rent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontWeight: "600",
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
    // fontWeight: "500",
    borderWidth: 1.5,
    borderColor: "#2972FE",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  bedBath: {
    marginLeft: -15,
  },
  profile: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  nameOwner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  overview: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  gallery: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgGallery: {
    width: 100,
    height: 90,
    borderRadius: 15,
  },
  features: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#E5EDFE",
    borderRadius: 15,
    height: 40,
    marginVertical: 10,
  },
  feature: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#2972FE",
    fontWeight: "600",
    borderWidth: 1.5,
    borderColor: "#2972FE",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 30,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    margin: 10,
  },
  facilities: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 15,
  },
  fac1: {
    // padding:6,
    fontWeight: "300",
  },
  fac2: {
    fontSize: 15,
    fontWeight: "700",
  },
  price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
});
