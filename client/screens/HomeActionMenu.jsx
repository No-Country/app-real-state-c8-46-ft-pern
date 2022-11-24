import { SafeAreaView, ScrollView, View } from "react-native";
import HVA from "../components/HomeActionMenu/HVA";
import SearchBar from "../components/HomeActionMenu/SearchBar";
import Popular from "../components/HomeActionMenu/Popular";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Favorites } from "../components";
import SearchMap from "../components/Search/SearchMap";
import NearbyYourLocation from "../components/HomeActionMenu/NearbyYourLocation";
import Profile from "./Profile Screens/Profile";
import AllProperties from "../components/HomeActionMenu/AllProperties";


const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SearchBar />
      <HVA />
      <Popular />
      <NearbyYourLocation />
      {/* <AllProperties/> */}
    </ScrollView>
  );
};

const HomeActionMenu = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchMap}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeActionMenu;
