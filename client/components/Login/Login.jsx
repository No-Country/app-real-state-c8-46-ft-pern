import { Dimensions , StyleSheet , Text , TextInput , View } from "react-native";

export const Login = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Go Rent</Text>
            <Text style={styles.subTitle}>Sign in and Go for it!</Text>
            <Text style={styles.label}> Email </Text>
            <TextInput placeholder={"Email"} style={styles.inputText}/>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Password" style={styles.inputText} secureTextEntry={true}/>
            <Text style={styles.text}>Forgot Password?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1 ,
                                         justifyContent: "flex-end" ,
                                         alignItems: "center" ,
                                     } ,
                                     title: {
                                         fontSize: 60 ,
                                         color: "#05445E" ,
                                         fontWeight: "Bold" ,
                                         textShadowColor: "#D4E3FF" ,
                                         textShadowOffset: {width: 4 , height: 4} ,
                                         textShadowRadius: 4 ,

                                     } ,
                                     subTitle: {
                                         fontSize: 25 ,
                                         color: "#05445E" ,
                                     } ,
                                     inputText: {
                                         fontSize: 17 ,
                                         color: "grey" ,
                                         padding: 10 ,
                                         borderRadius: 30 ,
                                         width: Dimensions.get("window").width - 50 ,
                                         height: 50 ,
                                         backgroundColor: "#fff" ,
                                         paddingStart: 20 ,
                                         elevation: 5 ,
                                     } ,
                                     forgotPassword: {
                                         fontSize: 16 ,
                                         color: "grey" ,
                                         marginTop: 20 ,
                                         textAlign: "center" ,
                                     } ,
                                     label: {
                                         fontSize: 16 ,
                                         marginTop: 20 ,
                                         marginBottom: 3 ,
                                         textAlign: "center" ,
                                         alignSelf: "flex-start" ,
                                         marginLeft: 25 ,
                                         color: "#D4E3FF" ,
                                         fontWeight: "bold" ,
                                     } ,
                                     text: {
                                         fontSize: 15 ,
                                         color: "#05445E" ,
                                         marginTop: 20 ,
                                         textAlign: "center" ,
                                         fontWeight: "bold" ,
                                     } ,
                                 });


