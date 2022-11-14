import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

const Card = ({ imagen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground source={imagen} style={styles.image}></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
