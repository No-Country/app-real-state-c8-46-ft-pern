import { Image, StyleSheet, Text, View } from "react-native";

const UserData = ({ userImg, firstName, lastName, email, city }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: userImg }}
          style={{ borderRadius: 50, width: 80, height: 80 }}
        />
      </View>
      <View style={styles.dataContainer}>
        <Text
          style={{ fontSize: 20, fontWeight: "600" }}
        >{`${firstName} ${lastName}`}</Text>
        <Text style={styles.textbase}>{email}</Text>
        <Text style={styles.textbase}>{city}</Text>
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  imageContainer: {},
  dataContainer: { marginLeft: 10 },
  textbase: { fontSize: 14, fontWeight:"200"},
});
