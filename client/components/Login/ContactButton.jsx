import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const ContactButton = ({title, option, value, onPress}) => {

    return (
        <TouchableOpacity style={[styles.button, {
            borderColor: value===title ? '#528DFF' : '#fff',
        }]} onPress={() => onPress(title)}>
            {title === 'SMS' ? (
                <MaterialIcons name={'sms'} size={24} color={'#528DFF'}/>
            ) : (
                <MaterialIcons name={'email'} size={24} color={'#528DFF'}/>
            )}
            <View>
                <Text> via {title}:</Text>
                <Text> via {option}:</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get("window").width - 50 ,
        height: 100 ,
        borderRadius: 10 ,
        flexDirection: 'row',
        justifyContent: "space-evenly" ,
        alignItems: "center" ,
        borderColor: '#fff',
        borderWidth: 2,
    },
});