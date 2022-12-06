import {Provider} from "react-redux";
import {AuthProvider} from "./context/AuthContext";
import {store} from "./redux/store";
import AppNav from "./navigation/AppNav";

const App = () => {
    return (
        <AuthProvider>
            <Provider store={store}>
                <AppNav/>
            </Provider>
        </AuthProvider>
    );
};

export default App;
