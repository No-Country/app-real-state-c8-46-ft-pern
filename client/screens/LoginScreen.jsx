<<<<<<< HEAD
import { StatusBar }                                   from "expo-status-bar";
import { StyleSheet , Text , TouchableOpacity , View } from "react-native";
import SvgTop                                          from "../assets/svg/SvgTop";
import { SubmitButton }                                from "../components/Login/SubmitButton";
import { Login }                                       from "../components/Login/Login";
import React                                           from "react";
import { SocialButton }                                from "../components/Login/SocialButton";
import { useNavigation }                               from "@react-navigation/native";
import { KeyboardAwareScrollView }                     from "react-native-keyboard-aware-scroll-view";
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Login } from "../components/Login/Login";
import { SocialButton } from "../components/Login/SocialButton";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
// import { AuthContext } from "../context/AuthContext";
// const { login } = useContext(AuthContext);
>>>>>>> 9874074bd68cd2ca277de02b93da3b45b918e577

export const LoginScreen = () => {
  const navigation = useNavigation();
  const googleIcon = require("../assets/google48.png");
  const facebookIcon = require("../assets/facebook48.png");

  const handleSubmit = () => {
    navigation.navigate("HomeActionMenu");
  };

<<<<<<< HEAD
    const handleSubmit=()=>{
        navigation.navigate('HomeActionMenu')
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.svgTop}>
                <SvgTop/>
            </View>
            <View style={styles.loginContainer}>
                <Login/>
            </View>
            <View style={styles.buttonContainer}>
                <SubmitButton title="Sign in" action={handleSubmit}/>
                <Text style={styles.text}>or continue with</Text>
                <View style={styles.buttonSocial}>
                    <SocialButton source={googleIcon} title="Google"/>
                    <SocialButton source={facebookIcon} title="Facebook"/>
                </View>
                <Text style={styles.text}>Don't have an account?
                </Text>
                <TouchableOpacity onPress={
                    () => navigation.navigate("Register")
                }>
                    <Text style={styles.textBold}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </KeyboardAwareScrollView>
    );
}
=======
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.loginContainer}>
        <Login />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>or continue with</Text>
        <View style={styles.buttonSocial}>
          <SocialButton source={googleIcon} title="Google" />
          <SocialButton source={facebookIcon} title="Facebook" />
        </View>
        <View style={styles.signUp}>
          <Text style={styles.text}>Don't have an account?{" "}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textBold}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
};
>>>>>>> 9874074bd68cd2ca277de02b93da3b45b918e577

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  loginContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    marginVertical: 20,
    top: 40,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
  },
  signUp: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
  textBold: {
    color: "#2972FE",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonSocial: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 20,
  },
});
