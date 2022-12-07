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
import { loginUser } from "../../redux/actions/registerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Login = () => {
<<<<<<< HEAD
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { login } = useContext(AuthContext);
    const [data, setData] = useState({ password: "", email: "" });
    const [error, setError] = useState(false);
    const { token } = useSelector((state) => state.user);
    console.log("vamos " + token);
    // console.log("vamos " + token);
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
            <View style={styles.titleContainer}>
                <FontAwesome5 size={40} name="home" color="white" style={styles.icon} />
            </View>
            <Text style={styles.title}>Go Rent</Text>
=======
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({ password: "", email: "" });
  const [error, setError] = useState(false);
  const { token } = useSelector((state) => state.user);
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
      <View style={styles.titleContainer}>
        <FontAwesome5 size={40} name="home" color="white" style={styles.icon} />
      </View>
      <Text style={styles.title}>Go Rent</Text>
>>>>>>> 0b966ef446f398345ce0c63c32885789ee17ea93

            <Text style={styles.subtitle}>Sign in to your account</Text>
            <Text style={styles.label}>Email</Text>
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

            <TouchableOpacity onPress={() => HandleLogin()} style={styles.signIn}>
                <Text style={{ color: "white", fontWeight: "600" }}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Forgot the password?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2972FE",
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    title: {
        marginTop: 5,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: "#2972FE",
    },
    subtitle: {
        marginTop: 25,
        marginBottom: 10,
        fontWeight: "bold",
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: "300",
        marginLeft: 10,
        color: "gray",
        paddingVertical: 5,
    },
    inputText: {
        fontSize: 14,
        padding: 10,
        borderRadius: 30,
        width: Dimensions.get("window").width - 50,
        height: 40,
        backgroundColor: "#fff",
        // paddingStart: 20,
        elevation: 1,
    },
    signIn: {
        backgroundColor: "#2972FE",
        width: Dimensions.get("window").width - 50,
        height: 45,
        marginTop: 20,
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        color: "#2972FE",
        marginTop: 20,
        textAlign: "center",
        fontWeight: "300",
    },
});
