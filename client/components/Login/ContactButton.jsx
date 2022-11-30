import {Text, TouchableOpacity, View} from "react-native";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export const ContactButton = ({title, option}) => {
    return (
        <TouchableOpacity>
            <FontAwesomeIcon icon={title === 'SMS' ? faPhone : faEnvelope} size={20}/>
            <View>
                <Text> via {title}</Text>
                <Text> via {option}</Text>
            </View>
        </TouchableOpacity>
    )
}