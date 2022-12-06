import { Dimensions , StyleSheet , Text , TouchableOpacity , View } from "react-native";

// make a button gradient component
export const SubmitButton = ({title, style, action }) => {
    return (
        <View style={style}>
            <TouchableOpacity style={styles.button} onPress={action}>
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
                                     },
                                 });

