import { SafeAreaView, View } from "react-native";
import HVA from "../components/HomeActionMenu/HVA";
import SearchBar from "../components/HomeActionMenu/SearchBar";
import Popular from "../components/HomeActionMenu/Popular";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo ,Feather,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { Profile, Favorites } from "../components";
import Search from "../components/Search/Search";
import NearbyYourLocation from "../components/HomeActionMenu/NearbyYourLocation";

const Home = () => {
  return (
      <View style={{ paddingTop: 10, backgroundColor: "white" }}>
      <SearchBar />
      <HVA />
      <Popular />
      <NearbyYourLocation />
     </View>
)
}


const HomeActionMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" color={color} size={size} />
          )
        }}
        >
        </Tab.Screen>
        <Tab.Screen name="Search" component={Search} options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        )
      }}
      >
        </Tab.Screen>
        <Tab.Screen name="Favorites" component={Favorites} options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="favorite" color={color} size={size} />
        )
      }}
      >
        </Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" color={color} size={size} />
        )
      }}
      >
      </Tab.Screen>
    </Tab.Navigator>

  );
};

export default HomeActionMenu;
