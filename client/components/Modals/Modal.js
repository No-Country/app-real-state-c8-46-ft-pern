import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";


const BottomPopup = ({ isModalOpen, setIsModalOpen }) => {
    const modalStyle = {
        backgroundColor: 'white',
        shadowColor: '#000',
        margin: 0,
        borderRadius: 16,
        padding: 10,
        // height:190
    }
    const modalContainerStyle = {
        flex: 1,
        justifyContent: 'flex-end'
    }

    return (
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={isModalOpen}
        >
            <View style={modalContainerStyle}>

                <View style={modalStyle}>
                    <Image
                        source={{
                            uri: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/293139603/4df0391cec704f1ea702e42d21d64796",
                        }}
                        style={{
                            width: "100%",
                            height: "40%",
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}
                    />
                    <View style={styles.typePrice}>
                        <Text style={styles.type}>Apartment</Text>
                        <View style={styles.price}>
                            <Text style={{ fontSize: 16, color: "#2972FE", fontWeight: "600" }}>
                                $1,800{" "}
                            </Text>
                            <Text style={{ fontSize: 10, color: "#C6C8CD" }}>/month</Text>
                        </View>
                    </View>
                    <Text
                        style={{ fontSize: 18, fontWeight: "600", paddingHorizontal: 15 }}
                    >
                        Owent Apartment
                    </Text>
                    <Text style={{ fontSize: 10, paddingLeft: 15 }}>
                        <Entypo
                            name="location-pin"
                            size={14}
                            color="#2972FE"
                            style={{ padding: 1 }}
                        />
                        Surubaya, Indonesia
                    </Text>
                    <TouchableWithoutFeedback onPress={() => setIsModalOpen(!setIsModalOpen)}><Text>CLOSE</Text></TouchableWithoutFeedback>
                </View>

            </View>
        </Modal>
    )
}

export default BottomPopup;

const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "80%",
    },
    menu: {
      width: "100%",
      height: "40%",
    },
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
      // fontWeight: 500,
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
  });