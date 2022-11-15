import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";


const AppNavigator = () => {
    const userId = true
    return (
        <NavigationContainer>
            { userId ? <TabsNavigator /> : <TabsNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigator;