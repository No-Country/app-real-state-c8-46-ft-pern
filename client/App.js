<<<<<<< HEAD
import Landing                  from "./screens/Landing";
import HomeActionMenu           from "./screens/HomeActionMenu";
import Details                  from "./screens/Details";
import { IntroScreen }          from "./screens/IntroScreen";
import { LoginScreen }          from "./screens/LoginScreen";
import { RegisterScreen }       from "./screens/RegisterScreen";
import Profile                  from "./screens/Profile Screens/Profile";
import theme                    from "./theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer }  from "@react-navigation/native";
import { ThemeProvider }        from "styled-components";
import { Provider }             from "react-redux";
import { store }                from "./redux/store";
import EditProfile              from "./screens/Profile Screens/EditProfile";
import Notifications            from "./screens/Profile Screens/Notifications";
import Security                 from "./screens/Profile Screens/Security";
import Appearance               from "./screens/Profile Screens/Appearance";
import Help                     from "./screens/Profile Screens/Help";
import {ForgotPassword} from "./screens/ForgotPassword";
=======
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./redux/store";
>>>>>>> 9874074bd68cd2ca277de02b93da3b45b918e577

import AppNav from "./navigation/AppNav";

<<<<<<< HEAD
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <NavigationContainer initialRouteName="HomeActionMenu">
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Landing"
                            component={Landing}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Intro"
                            component={IntroScreen}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Forgot"
                            component={ForgotPassword}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="HomeActionMenu"
                            component={HomeActionMenu}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Details"
                            component={Details}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="EditProfile"
                            component={EditProfile}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Notifications"
                            component={Notifications}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Security"
                            component={Security}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Appearance"
                            component={Appearance}
                            options={{
                                headerShown: false ,
                            }}
                        />
                        <Stack.Screen
                            name="Help"
                            component={Help}
                            options={{
                                headerShown: false ,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </ThemeProvider>
    );
}
=======
const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppNav />
      </Provider>
    </AuthProvider>
  );
};

export default App;
>>>>>>> 9874074bd68cd2ca277de02b93da3b45b918e577
