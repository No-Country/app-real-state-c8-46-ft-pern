import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home , Detail } from "../screens/index";


const Stack = createNativeStackNavigator();

const Hom = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    title: 'Detail',
                }}
            />
        </Stack.Navigator>
    )
}

export default Hom;