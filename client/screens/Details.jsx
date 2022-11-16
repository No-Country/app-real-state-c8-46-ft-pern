import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// id: 1,
//     imgContainer: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5",
//     type: "Apartment",
//     price: "$1,800",
//     name: "Owent Apartment",
//     location: "Surabaya, Indonesia",

const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: 400, width: "100%", position: "relative" }}
        source={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293016153/3aba26bb07864a5586f5f1c584230ad5"
        }
      >
        <View style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeActionMenu")}
          >
            <Ionicons name="arrow-back" size={20} style={styles.iconUp} />
          </TouchableOpacity>
          <AntDesign name="hearto" size={20} style={styles.iconUp} />
        </View>
      </ImageBackground>
      <View style={styles.info}>
        <View style={styles.typereview}>
          <Text style={styles.type}>Apartment</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AntDesign name="star" size={18} color="yellow" />
            <Text style={{ fontWeight: '600' }}> 4.5 (1.265 reviews) </Text>
          </View>
        </View>
        <View style={styles.nameLocation}>
          <Text style={{ fontSize: 20, fontWeight: '600', paddingVertical: 10 }}>
            Owent Apartment
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
            <Text style={{ fontWeight: '300' }}>
              Sudirman St. 169, Surabaya, Indonesia
            </Text>
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
            source="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"
            style={styles.profile}
          />
          <View>
            <Text style={{ fontWeight: '600' }}>Ramona Flowers</Text>
            <Text>Partner</Text>
          </View>
          <MaterialIcons name="message" size={20} color="#2972FE" />
          <FontAwesome name="phone" size={20} color="#2972FE" />
        </View>
        {/* ---------------------OVERVIEW--------------------------------- */}

        <View style={styles.overview}>
          <Text style={{ fontWeight: '600' }}>Overview</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            provident temporibus eligendi minus sunt ratione excepturi dolorum
            nulla eos modi explicabo totam aliquid eius obcaecati expedita
            <Text color="#2972FE" style={{ fontWeight: '600' }}>
              Read more...
            </Text>
          </Text>
        </View>
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
    fontWeight: '600',
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
  profile: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  nameOwner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
