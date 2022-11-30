import {Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

export const SocialButton = ({title, source}) => {

    return (
        <TouchableNativeFeedback>
            <View style={styles.buttonContainer}>
                <Image source={source} style={styles.img}/>
                <Text style={styles.title}> {title} </Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
                                        buttonContainer: {
                                            flexDirection: "row" ,
                                            justifyContent: "center" ,
                                            alignItems: "center" ,
                                            borderRadius: 5 ,
                                            backgroundColor: "#fff" ,
                                            elevation: 5 ,
                                            shadowColor: "#60A3D9" ,
                                            paddingHorizontal: 20 ,
                                            paddingVertical: 10 ,
                                        },
                                        img: {
                                            width: 25 ,
                                            height: 25 ,
                                        },
                                        title: {
                                            color: "#05445E" ,
                                            fontSize: 15 ,
                                            fontWeight: "bold" ,
                                        }
                                 });


