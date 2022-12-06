<<<<<<< HEAD
import {Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

export const SocialButton = ({title, source}) => {

    return (
        <TouchableNativeFeedback>
            <View style={styles.buttonContainer}>
                <Image source={source} style={styles.img}/>
                <Text style={styles.title}> {title} </Text>
            </View>
        </TouchableNativeFeedback>
    )
}
=======
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const SocialButton = ({ title, source }) => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Image source={source} style={styles.img} />
        <Text style={styles.title}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};
>>>>>>> 9874074bd68cd2ca277de02b93da3b45b918e577

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  img: {
    width: 25,
    height: 25,
  },
  title: {
    color: "#05445E",
    fontSize: 15,
    fontWeight: "bold",
  },
});
