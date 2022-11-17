import { ImageBackground , StyleSheet , Text , TouchableOpacity , View } from "react-native";
import { useState }                                                      from "react";
import { useNavigation }                                                 from "@react-navigation/native";

const state1 = {
    id: 1 ,
    data: {
        title: "The Biggest Real State App of the century" ,
        uri: "https://images.unsplash.com/photo-1626114000241-b419d40a75b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=330&q=80" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
};

const state2 = {
    id: 2 ,
    data: {
        title: "We Focus on Providing a Comfortable Place For You" ,
        uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
    }
}

const state3 = {
    id: 3 ,
    data: {
        title: "Find Your Beloved Family's Dream House with us" ,
        uri: "https://images.unsplash.com/photo-1580785693039-7efb961f4b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" ,
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
}

export const IntroScreen = () => {
    const navigation = useNavigation();

    const [countID , setCountId] = useState(1)

    const [state , setState] = useState(state1)


    const {data} = state
    const {title , uri , description} = data
    const img = {
        uri ,
    }


    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxThree}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity style={[styles.button, styles.buttonTransparent]} onPress={() => {
                    navigation.navigate("HomeActionMenu")
                }}>
                    <Text style={[styles.buttonText, styles.buttonTransparentText]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if (countID === 1) {
                        setCountId(countID + 1)
                        setState(state2)
                    } else if (countID === 2) {
                        setCountId(countID + 1)
                        setState(state3)
                    } else {
                        navigation.navigate("HomeActionMenu")
                    }
                }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
                                     image: {
                                         flex: 1 ,
                                         justifyContent: "center" ,
                                     } ,
                                     boxOne: {
                                         flex: 60 ,
                                     } ,
                                     boxThree: {
                                         flex: 40 ,
                                         fontSize: 30 ,
                                         borderTopRightRadius: 50 ,
                                         borderTopLeftRadius: 50 ,
                                         backgroundColor: "white" ,
                                         textAlign: "center" ,
                                         width: "100%" ,
                                         justifyContent: "space-evenly" ,
                                         padding: 10 ,
                                     } ,
                                     title: {
                                         fontSize: 25 ,
                                         color: "#6499FF" ,
                                         width: "80%" ,
                                         alignSelf: "center" ,
                                         textAlign: "center" ,
                                         fontWeight: "bold" ,
                                     },
                                        description: {
                                            fontSize: 15 ,
                                            color: "gray" ,
                                            width: "80%" ,
                                            alignSelf: "center" ,
                                            marginTop: 10 ,
                                            textAlign: "center" ,
                                        },
                                        button: {
                                            backgroundColor: "#6499FF" ,
                                            width: "80%" ,
                                            alignSelf: "center" ,
                                            borderRadius: 50 ,
                                            marginTop: 20 ,
                                            padding: 10 ,
                                        },
                                        buttonTransparent: {
                                            backgroundColor: "transparent" ,
                                        },
                                        buttonText: {
                                            color: "white" ,
                                            textAlign: "center" ,
                                            fontSize: 20 ,
                                            fontWeight: "bold" ,
                                        },
                                        buttonTransparentText: {
                                            color: "#6499FF" ,
                                        }
                                 });

