import { ThemeProvider }        from "styled-components";
import Landing                  from "./screens/Landing";
import HomeActionMenu           from "./screens/HomeActionMenu";
import theme                    from "./theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer }  from "@react-navigation/native";
import Details                  from "./screens/Details";
import { IntroScreen }          from "./screens/IntroScreen";


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

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
