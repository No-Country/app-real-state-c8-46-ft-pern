import {Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export const ContactButton = ({title, option}) => {
    return (
        <TouchableOpacity>
            {title === 'SMS' ? (
                <MaterialIcons name={'sms'} size={24} color={'black'}/>
            ) : (
                <MaterialIcons name={'email'} size={24} color={'black'}/>
            )}
            <View>
                <Text> via {title}</Text>
                <Text> via {option}</Text>
            </View>
        </TouchableOpacity>
    )
}