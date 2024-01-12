import "./App.css";
import Login from "./components/login";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Login test={"hello"} />
    </Provider>
  );
}

export default App;
