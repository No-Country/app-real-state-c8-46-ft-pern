import { Dimensions , StyleSheet , Text , TouchableOpacity , View } from "react-native";
import React                                                        from "react";


// make a button gradient component
export const Button = ({title}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
                                     button: {
                                         width: Dimensions.get("window").width - 50 ,
                                         height: 50 ,
                                         borderRadius: 30 ,
                                         justifyContent: "center" ,
                                         alignItems: "center" ,
                                         backgroundColor: "#528DFF" ,
                                         elevation: 5 ,
                                     } ,
                                     buttonText: {
                                         color: "#D4E3FF" ,
                                         fontSize: 20 ,
                                         fontWeight: "bold" ,
                                     } ,
                                     text: {
                                         color: "grey" ,
                                         fontSize: 15 ,
                                         fontWeight: "bold" ,
                                         textAlign: "center" ,
                                         marginTop: 20 ,
                                     }
                                 });

