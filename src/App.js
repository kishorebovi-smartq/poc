import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./components/landing/view";
function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
