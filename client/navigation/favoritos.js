import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites } from "../screens/index";


const Stack = createNativeStackNavigator();

const Favorit = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Favorites"
        >
            <Stack.Screen
                name="Favoritos"
                component={Favorites}
                options={{
                    title: 'Favoritos',
                }}
            />
        </Stack.Navigator>
    )
}

export default Favorit;