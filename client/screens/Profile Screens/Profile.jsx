import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/Profile/Menu";
import Settings from "../../components/Profile/Settings";
import UserData from "../../components/Profile/UserData";
import { getUser } from "../../redux/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <View style={{}}>
      <Settings />
      <UserData
        firstName={"Usuario"}
        lastName={"Prueba"}
        email={"user@prueba.com"}
        city={"Unknown"}
        userImg={
          "https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg"
        }
      />
      <Menu />
    </View>
  );
};

export default Profile;
