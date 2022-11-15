import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../screens/index";


const Stack = createNativeStackNavigator();

const Buscar = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Buscar"
        >
            <Stack.Screen
                name="Buscar"
                component={Search}
                options={{
                    title: 'Buscar',
                }}
            />
        </Stack.Navigator>
    )
}

export default Buscar;