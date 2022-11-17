import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";

const image = {
  uri: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0c5bd491254142e1cc277a6d84cdc6ba",
};
const logo = {
  uri: "https://cdn.icon-icons.com/icons2/2225/PNG/512/home_icon_134474.png",
};

const Landing = () => {
  const navigation = useNavigation();

  const MyButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28.5%;
    height: 15.5%;
    background-color: #6499FF
    border-radius: 50px;
    align-self: center;
    `;
  const MyText = styled.Text`
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.medium};
  `;

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <MyButton
          onPress={() => {
            navigation.navigate("HomeActionMenu");
          }}
        >
          <FontAwesome5 size={50} name="home" color="white" />
          {/* <Text style={{ color: "white" }}>Go Finance</Text> */}
        </MyButton>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Landing;
