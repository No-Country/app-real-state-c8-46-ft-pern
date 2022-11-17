import { ImageBackground , StyleSheet , Text , TouchableOpacity , View } from "react-native";
import { useState }                                                      from "react";
import { useNavigation }                                                 from "@react-navigation/native";
import  {data}                                                           from "../components/Intro/CarouselPagination";


export const IntroScreen = () => {
    const navigation = useNavigation();

    const [countID , setCountId] = useState(1)

    const handleNext = () => {
        if (countID === data.length) {
            navigation.navigate("HomeActionMenu")
        } else {
            setCountId(countID + 1)
            setState(data[countID])
        }
    }

    const [state , setState] = useState(data[0])

    const {title , uri , description} = state
    const img = {
        uri ,
    }

    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity style={[styles.button, styles.buttonTransparent]} onPress={() => {
                    navigation.navigate("HomeActionMenu")
                }}>
                    <Text style={[styles.buttonText, styles.buttonTransparentText]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    handleNext()
                }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
        image: {
        flex: 1 , justifyContent: "center" ,
    } ,
        boxOne: {
        flex: 60 ,
    } ,
        boxTwo: {
        flex: 40 ,
        fontSize: 30 ,
        borderTopRightRadius: 50 ,
        borderTopLeftRadius: 50 ,
        backgroundColor: "white" ,
        textAlign: "center" ,
        width: "100%" ,
        justifyContent: "space-evenly" ,
        paddingHorizontal: 10 ,
        paddingVertical: 30 ,
    } ,
        title: {
        fontSize: 25 ,
        color: "#6499FF" ,
        width: "80%" ,
        alignSelf: "center" ,
        textAlign: "center" ,
        fontWeight: "bold" ,
    } ,
        description: {
        fontSize: 15 , color: "gray" , width: "80%" , alignSelf: "center" , marginTop: 10 , textAlign: "center" ,
    } ,
        button: {
        backgroundColor: "#6499FF" ,
        width: "80%" ,
        alignSelf: "center" ,
        borderRadius: 50 ,
        marginTop: 20 ,
        padding: 10 ,
    } ,
        buttonTransparent: {
        backgroundColor: "transparent" ,
    } ,
        buttonText: {
        color: "white" , textAlign: "center" , fontSize: 20 , fontWeight: "bold" ,
    } ,
        buttonTransparentText: {
        color: "#6499FF" ,
    }
});

