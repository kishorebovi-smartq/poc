import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./utils/router";
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
