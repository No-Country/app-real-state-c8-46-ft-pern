import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import {ContactButton} from "../components/Login/ContactButton";
import {SubmitButton} from "../components/Login/SubmitButton";
import React, {useState} from "react";
import {OtpVerification} from "../components/Login/OtpVerification";


export const ForgotPassword = () => {

    const phoneNumber = '+1 123 456 7890';
    const email = 'example@gmail.com';

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRenderOption = () => {
        if (selectedOption === 'SMS' || selectedOption === 'Email') {
            return (
                <OtpVerification/>
            )
        } else {
            return (
                <View style={styles.buttonContainer}>
                    <ContactButton title={'SMS'} option={phoneNumber} value={selectedOption}
                                   onPress={setSelectedOption}/>
                    <ContactButton title={'Email'} option={email} value={selectedOption} onPress={setSelectedOption}/>
                </View>
            )
        }
    }

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>Select which contact details should we use to reset your password</Text>
                <View style={styles.buttonContainer}>
                    <ContactButton title="SMS" option={phoneNumber} value={selectedOption}
                                   onPress={handleOptionChange}/>
                    <ContactButton title="Email" option={email} value={selectedOption} onPress={handleOptionChange}/>
                </View>
                <SubmitButton title="Send" action={
                    () => {
                        handleRenderOption()
                    }
                }/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#09101D',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonContainer: {
        flex: 2 / 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    }
})