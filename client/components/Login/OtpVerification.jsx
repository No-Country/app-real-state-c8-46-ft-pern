import {View, Text, TextInput, StyleSheet} from "react-native";

export const OtpVerification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputsContainer: {
        flex: 2/3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    text: {
        color: '#09101D',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
    },
});