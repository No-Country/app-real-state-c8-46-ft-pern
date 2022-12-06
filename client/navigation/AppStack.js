import HomeActionMenu from "../screens/HomeActionMenu";
import Details from "../screens/Details";
import Profile from "../screens/Profile Screens/Profile";
import EditProfile from "../screens/Profile Screens/EditProfile";
import Notifications from "../screens/Profile Screens/Notifications";
import Security from "../screens/Profile Screens/Security";
import Appearance from "../screens/Profile Screens/Appearance";
import Help from "../screens/Profile Screens/Help";

import { createStackNavigator } from "@react-navigation/stack";

export default function AppStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeActionMenu"
        component={HomeActionMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appearance"
        component={Appearance}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
