import { useContext, useEffect } from "react";
import { View } from "react-native";
import Menu from "../../components/Profile/Menu";
import Settings from "../../components/Profile/Settings";
import UserData from "../../components/Profile/UserData";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <View style={{}}>
      <Settings />
      <UserData
        firstName={userInfo.response ? userInfo.response.firstName : "Prueba"}
        lastName={userInfo.response ? userInfo.response.lastName : "Prueba"}
        email={
          userInfo.response ? userInfo.response.email : "prueba@prueba.com"
        }
        userImg={
          userInfo.response.profileImage
            ? userInfo.response.profileImage
            : "https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg"
        }
      />
      <Menu />
    </View>
  );
};

export default Profile;
