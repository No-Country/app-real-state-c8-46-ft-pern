import { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Menu from "../../components/Profile/Menu";
import Settings from "../../components/Profile/Settings";
import UserData from "../../components/Profile/UserData";

const Profile = () => {

// useEffect(() => {
//   dispatch()
// }, []);

  return (
    <View style={{}}>
      <Settings />
      <UserData
        firstName={"Usuario"}
        lastName={"Prueba"}
        email={"user@prueba.com"}
        city={"Unknown"}
        userImg={
          "https://esteticafacialdexeus.com/wp-content/uploads/2016/09/tipos-de-cara.jpg"
        }
      />
      <Menu />
    </View>
  );
};

export default Profile;
