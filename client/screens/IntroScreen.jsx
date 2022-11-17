import { StyleSheet, Text, View } from "react-native";

export const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}></Text>
      <View style={styles.boxThree}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28C4D9",
    alignItems: "center",
  },
  boxOne: {
    flex: 2/3,
  },
  boxThree: {
    flex: 1/2,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    textAlign: "center",
    width: "90%",
  }
});

