import {Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ContactButton} from "../components/Login/ContactButton";
import {SubmitButton} from "../components/Login/SubmitButton";


export const ForgotPassword = () => {

    const navigation = useNavigation();
    const phoneNumber = '+1 123 456 7890';
    const email = 'example@gmail.com';

    return (
        <View style={styles.container}>
            <Text>Select which contact details should we use to reset your password</Text>
            <ContactButton title="SMS" option={phoneNumber}/>
            <ContactButton title="Email" option={email}/>
            <SubmitButton title="Send" action={() => navigation.navigate('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})