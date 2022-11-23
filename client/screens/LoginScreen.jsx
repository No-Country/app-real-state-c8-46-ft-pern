import { StatusBar }                from "expo-status-bar";
import { StyleSheet , Text , View } from "react-native";
import SvgTop                       from "../assets/svg/SvgTop";
import { Button }                   from "../components/Login/Button";
import { Login }                    from "../components/Login/Login";
import React                        from "react";
import { SocialButton }             from "../components/Login/SocialButton";

export const LoginScreen = () => {

    const googleIcon = require('../assets/google48.png');
    const facebookIcon = require('../assets/facebook48.png');

    return (
        <View style={styles.container}>
            <View style={styles.svgTop}>
                <SvgTop/>
            </View>
            <View style={styles.loginContainer}>
                <Login/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign in"/>
                <Text style={styles.text}>or continue with</Text>
                <View style={styles.buttonSocial}>
                    <SocialButton source={googleIcon} title="Google"/>
                    <SocialButton source={facebookIcon} title="Facebook"/>
                </View>
                <Text style={styles.text}>Don't have an account? <Text style={styles.textBold}>Sign up</Text></Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 100 ,
                                         backgroundColor: "#f1f1f1" ,
                                     } ,
                                     buttonContainer: {
                                         flex: 35 ,
                                         width: "100%" ,
                                         justifyContent: "space-evenly" ,
                                         alignItems: "center" ,
                                     } ,
                                     loginContainer: {
                                         flex: 65 ,
                                         width: "100%" ,
                                         justifyContent: "space-evenly" ,
                                         alignItems: "center" ,
                                         padding: 20 ,
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
                                     } ,

                                 });
