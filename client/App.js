import Landing from "./screens/Landing";
import HomeActionMenu from "./screens/HomeActionMenu";
import Details from "./screens/Details";
import { IntroScreen } from "./screens/IntroScreen";

import { Profile } from "./components";
import theme from "./theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer initialRouteName="HomeActionMenu">
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Intro"
              component={IntroScreen}
              options={{
                headerShown: false,
              }}
            />
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
