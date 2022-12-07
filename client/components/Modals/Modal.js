import {
  Modal,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { useDispatch } from "react-redux";
import { confirmRent } from "../../redux/actions/rentActions";
const screenHeight = Dimensions.get("window").height;



const BottomPopup = ({ isModalOpen, setIsModalOpen, info }) => {
  const modalStyle = {
    backgroundColor: "white",
    shadowColor: "#000",
    borderRadius: 16,
    padding: 10,
    height: isModalOpen ? screenHeight : screenHeight / 4,
    width: "100%",
  };
  const modalContainerStyle = {
    flex: 1,
    justifyContent: "flex-end",
  };
  const dispatch = useDispatch();
  console.log(info);
  const handleRent = () => {
    dispatch(confirmRent(info))
}
  return (
    <Modal
      style={{ backgroundColor: "red" }}
      animationType={"slide"}
      transparent={true}
      visible={isModalOpen}
    >
      <TouchableWithoutFeedback
        onPress={() => setIsModalOpen(!isModalOpen)}
        style={modalContainerStyle}
      >
        <View style={modalStyle}>
          <Image
            source={{
              uri: info.coverPhoto,
            }}
            style={{
              width: "100%",
              height: "45%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
          <View style={styles.typePrice}>
            <Text style={styles.type}>{info.purpose}</Text>
            <View style={styles.price}>
              <Text
                style={{ fontSize: 16, color: "#2972FE", fontWeight: "600" }}
              >
                {info.price}{" "}
              </Text>
              <Text style={{ fontSize: 10, color: "#C6C8CD" }}>/month</Text>
            </View>
          </View>
          <Text
            style={{ fontSize: 18, fontWeight: "600", paddingHorizontal: 15 }}
          >
            {info.title}
          </Text>
          <Text style={{ fontSize: 10, paddingLeft: 15 }}>
            <Entypo
              name="location-pin"
              size={14}
              color="#2972FE"
              style={{ padding: 1 }}
            />
            {info.location}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 15,
            }}
          >
            <View style={styles.beds}>
              <FontAwesome name="bed" size={15} color="#2972FE" />
              <Text style={styles.bedBath}>4 Beds</Text>
            </View>

            <View style={styles.beds}>
              <FontAwesome name="bath" size={15} color="#2972FE" />
              <Text style={styles.bedBath}>2 Bath</Text>
            </View>
          </View>

          <View style={styles.beds}>
            <Text style={styles.item}>Baths: </Text>
            <Text style={styles.item}>{info.baths}</Text>
          </View>
          <View style={styles.beds}>
            <Text style={styles.item}>Rooms: </Text>
            <Text style={styles.item}> {info.rooms}</Text>
          </View>
          <View style={styles.beds}>
            <Text style={styles.item}>Living Area</Text>
            <Text style={styles.item}>{info.area} sqft</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    
    </Modal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({
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
  bedBath: {
    padding: 10,
  },
  beds: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    padding: 5,
  },
});
