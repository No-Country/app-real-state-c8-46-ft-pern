import { StatusBar }                                   from "expo-status-bar";
import { StyleSheet , Text , TouchableOpacity , View } from "react-native";
import SvgTop                                          from "../assets/svg/SvgTop";
import { SubmitButton }                                from "../components/Login/SubmitButton";
import { Login }                                       from "../components/Login/Login";
import React                                           from "react";
import { SocialButton }                                from "../components/Login/SocialButton";
import { useNavigation }                               from "@react-navigation/native";
import { KeyboardAwareScrollView }                     from "react-native-keyboard-aware-scroll-view";

export const LoginScreen = () => {

    const navigation = useNavigation();
    const googleIcon = require('../assets/google48.png');
    const facebookIcon = require('../assets/facebook48.png');

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

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1 ,
                                         backgroundColor: "#f1f1f1" ,
                                     } ,
                                     buttonContainer: {
                                         width: "100%" ,
                                         justifyContent: "space-evenly" ,
                                         alignItems: "center" ,
                                         padding: 20 ,
                                         marginTop: 20 ,
                                     } ,
                                     loginContainer: {
                                         width: "100%" ,
                                         justifyContent: "space-evenly" ,
                                         alignItems: "center" ,
                                         padding: 20 ,
                                         marginVertical: 20 ,
                                         top: 40 ,
                                     } ,
                                     svgTop: {
                                         position: "absolute" ,
                                         top: 0 ,
                                         left: 0 ,
                                         right: 0 ,
                                         bottom: 0 ,
                                         zIndex: -1 ,
                                     } ,
                                     text: {
                                         color: "#05445E" ,
                                         fontSize: 15 ,
                                         fontWeight: "bold" ,
                                         padding: 10 ,
                                     } ,
                                     textBold: {
                                         color: "#05445E" ,
                                         fontSize: 15 ,
                                         fontWeight: "bold" ,
                                         textDecorationLine: "underline" ,
                                     } ,
                                     buttonSocial: {
                                         flexDirection: "row" ,
                                         justifyContent: "space-evenly" ,
                                         width: "100%" ,
                                         padding: 20 ,
                                     } ,

                                 });
