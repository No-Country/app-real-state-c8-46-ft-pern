import { Modal, Dimensions, StyleSheet, Image, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import MapView from "react-native-maps";
const screenHeight = Dimensions.get("window").height;

const BottomPopup = ({isModalOpen,setIsModalOpen,info}) => {
    
    const modalStyle = {
        backgroundColor: 'white',
        shadowColor: '#000',  
        borderRadius: 16,
        padding: 10,
        height: isModalOpen ? screenHeight : screenHeight / 4,
        width: '100%',
    }
    const modalContainerStyle = {
        flex: 1,
        justifyContent: 'flex-end'
    }

    return (
      

        <Modal
            style={{backgroundColor:'red'}}
            animationType={"slide"}
            transparent={true}
            visible={isModalOpen}
            >

            <TouchableWithoutFeedback onPress={() => setIsModalOpen(!isModalOpen)} style={modalContainerStyle}>
                <View style={modalStyle}>
                    <Image
                        source={{
                            uri: info.img,
                        }}
                        style={{
                            width: "100%",
                            height: "45%",
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}
                    />
                    <View style={styles.typePrice}>
                        <Text style={styles.type}>{info.type}</Text>
                        <View style={styles.price}>
                            <Text style={{ fontSize: 16, color: "#2972FE", fontWeight: "600" }}>
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
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

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
});