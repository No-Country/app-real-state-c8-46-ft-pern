import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SignInButton } from "./SignInButton";
import { loginUser } from "../../redux/actions/registerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({ password: "", email: "" });
  const [error, setError] = useState(false);
  const { token } = useSelector((state) => state.user);
  console.log("vamos " + token);
  const HandleLogin = () => {
    if (!data.email) {
      setError(true);
    }
    if (!data.password) {
      setError(true);
    }
    if (error) {
      console.log(error);
    } else {
      setError(false);
      login(data.email, data.password);
      dispatch(loginUser(data));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Rent</Text>
      <Text style={styles.subTitle}>Sign in and Go for it!</Text>
      <Text style={styles.label}> Email </Text>
      <TextInput
        onChangeText={(e) => setData({ ...data, email: e })}
        placeholder={"Email"}
        style={styles.inputText}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={(e) => setData({ ...data, password: e })}
        placeholder="Password"
        style={styles.inputText}
        secureTextEntry={true}
      />
      <Text style={styles.text}>Forgot Password?</Text>
      {/* <TouchableOpacity onPress={()=> {login()}}>
        <Text>Sign In</Text>
      </TouchableOpacity> */}
      <SignInButton title="Sign in" action={HandleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    color: "#05445E",
    fontWeight: "Bold",
    textShadowColor: "#D4E3FF",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
  },
  subTitle: {
    fontSize: 25,
    color: "#05445E",
  },
  inputText: {
    fontSize: 17,
    color: "grey",
    padding: 10,
    borderRadius: 30,
    width: Dimensions.get("window").width - 50,
    height: 50,
    backgroundColor: "#fff",
    paddingStart: 20,
    elevation: 5,
  },
  forgotPassword: {
    fontSize: 16,
    color: "grey",
    marginTop: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 3,
    textAlign: "center",
    alignSelf: "flex-start",
    marginLeft: 25,
    color: "#D4E3FF",
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "#05445E",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
