import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from './inicio'
import Profile from "./profile";
import Search from "./buscar";
import Favorites from "./favoritos";
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 15,
                    left: 20,
                    elevation: 10,
                    right: 20,
                    borderRadius: 15,
                    height: 60,
                    shadowOffset: {
                        width: 5,
                        height: 10
                    },
                    shadowColor: "#7F5DF0",
                    shadowRadius: 3.5,
                    shadowOpacity: 0.25,
                    
                }
            }}
      
        >
            <BottomTab.Screen
                name="Inicio"
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : "home-outline"}
                            size={22}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={focused ? "search-circle" : "search-circle-outline"} size={24} color="black" />
                    )
                }}
            />
            <BottomTab.Screen 
                name="Favorites"
                component={Favorites}
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={focused ? "heart-circle" : "heart-circle-outline"} size={24} color="black" />
                    )
                }}
            />

            <BottomTab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={ focused ? "person-circle" : "person-circle-outline"} size={24} color="black" />
                    ),
                }}
            />
            
        </BottomTab.Navigator>
    )
}

export default Tabs;