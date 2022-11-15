<<<<<<< HEAD
import AppNavigator from "./navigation/index";

export default function App() {

  return (
    <AppNavigator/>
  );
}

=======
import { ThemeProvider } from "styled-components";
import Landing from "./screens/Landing";
import HomeActionMenu from "./screens/HomeActionMenu";
import theme from "./theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer initialRouteName="HomeActionMenu">
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="HomeActionMenu" component={HomeActionMenu}  options={{
              headerShown: false,
            }}/>
          {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
          {/* <Stack.Screen
            name="Log out"
            onPress={() => {
              navigation.navigate("Login");
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
>>>>>>> 39d9490d89876748aeea576efefc9bf886fa9334
