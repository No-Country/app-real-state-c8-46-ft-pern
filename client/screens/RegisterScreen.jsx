import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import { SocialButton } from "../components/Login/SocialButton";
import { StatusBar } from "expo-status-bar";
import { SignInButton } from "../components/Login/SignInButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/registerAction";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
    const navigation = useNavigation();
    const googleIcon = require("../assets/google48.png");
    const facebookIcon = require("../assets/facebook48.png");

    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profileImage: "http://localhost:8080",
    });
    const [error, setError] = useState(false);
    const handleSubmit = () => {
        if (!data.email) {
            setError(true);
        }
        if (!data.lastName) {
            setError(true);
        }
        if (!data.firstName) {
            setError(true);
        }
        if (!data.password) {
            setError(true);
        } else {
            setError(false);
            dispatch(registerUser(data));
        }
    };

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.form}>
                <FontAwesome5
                    name="home"
                    size={70}
                    color="blue"
                    style={{ padding: 20 }}
                />
                <Text style={styles.subTitle}>Sign Up Fast! and Go Rent</Text>
                <Text style={styles.label}> First Name </Text>
                <TextInput
                    onChangeText={(e) => setData({ ...data, firstName: e })}
                    placeholder={"First Name"}
                    style={styles.inputText}
                />
                <Text style={styles.label}> Last Name </Text>
                <TextInput
                    onChangeText={(e) => setData({ ...data, lastName: e })}
                    placeholder={"Last Name"}
                    style={styles.inputText}
                />
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
                {error ? (
                    <Text style={{ color: "red" }}>
                        you have to complet all the inputs
                    </Text>
                ) : null}
                <SignInButton title="Sign Up" handleSubmit={handleSubmit}
                              title="Sign up"
                              style={{ marginTop: 20 }}
                              action={handleSubmit}
                />
            </View>
            <Text style={styles.text}>or continue with</Text>
            <View style={styles.socialButtonContainer}>
                <SocialButton title="Facebook" source={facebookIcon} />
                <SocialButton title="Google" source={googleIcon} />
            </View>
            <StatusBar style="auto" />
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    form: {
        width: "100%",
        alignItems: "center",
        padding: 20,
    },
    subTitle: {
        fontSize: 30,
        color: "#05445E",
        fontWeight: "Bold",
        textShadowColor: "#D4E3FF",
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 4,
        width: Dimensions.get("window").width - 50,
        textAlign: "center",
        padding: 10,
    },
    inputText: {
        fontSize: 14,
        color: "grey",
        padding: 8,
        borderRadius: 30,
        width: Dimensions.get("window").width - 50,
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
        fontSize: 13,
        marginTop: 20,
        marginBottom: 3,
        textAlign: "center",
        alignSelf: "flex-start",
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
    socialButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        padding: 20,
    },
});