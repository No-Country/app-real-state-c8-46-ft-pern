import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings , Notificaciones } from "../screens/index";


const Stack = createNativeStackNavigator();

const Profil = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Settings"
        >
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Settings',
                }}
            />
            <Stack.Screen
                name="Notificaciones"
                component={Notificaciones}
                options={{
                    title: 'Notificaciones',
                }}
            />
        </Stack.Navigator>
    )
}

export default Profil;