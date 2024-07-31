import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.jsx";

const AppEntrypoint = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppEntrypoint;
