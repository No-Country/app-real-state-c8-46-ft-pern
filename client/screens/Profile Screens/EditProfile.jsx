import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MenuTitle from "../../components/Profile/MenuTitle";
const EditProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "User",
    lastName: "Prueba",
    email: "",
    gender: "",
    birthdate: "",
    userImg: "",
  });
  // useEffect(() => {
  //     dispatch(getUser)
  // }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MenuTitle component="Profile" title="Edit Profile" />

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://esteticafacialdexeus.com/wp-content/uploads/2016/09/tipos-de-cara.jpg",
          }}
          style={{ borderRadius: 50, width: 80, height: 80 }}
        />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.textItem}>
          First Name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserData.firstName}
          value={userData.firstName}
        />
        <Text style={styles.textItem}>
          Last Name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserData.lastName}
          value={userData.lastName}
        />
        <Text style={styles.textItem}>
          Email <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserData.email}
          value={userData.email}
        />
        <Text style={styles.textItem}>
          Gender <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserData.gender}
          value={userData.gender}
        />
        <Text style={styles.textItem}>
          Date Of Birth <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserData.birthdate}
          value={userData.birthdate}
        />
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            backgroundColor: "#2972FE",
            color: "white",
            height: 40,
            width: "90%",
            borderRadius: 35,
            textAlign: "center",
            padding: 8,
            fontSize: 16,
            fontWeight:"bold"
          }}
        >
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  dataContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textItem: {
    color: "gray",
  },
  input: {
    color: "black",
    marginBottom: 20,
    fontWeight: "700",
  },
});

export default EditProfile;
