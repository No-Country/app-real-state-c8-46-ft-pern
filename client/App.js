import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./redux/store";

import AppNav from "./navigation/AppNav";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>
  );
};

export default App;
