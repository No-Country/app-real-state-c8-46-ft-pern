import {Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export const ContactButton = ({title, option}) => {
    return (
        <TouchableOpacity>
            {title === 'SMS' ? (
                <MaterialIcons name={'sms'} size={24} color={'#528DFF'}/>
            ) : (
                <MaterialIcons name={'email'} size={24} color={'#528DFF'}/>
            )}
            <View>
                <Text> via {title}</Text>
                <Text> via {option}</Text>
            </View>
        </TouchableOpacity>
    )
}