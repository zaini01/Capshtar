import "./App.css";
import Aplikasi from "./views/Aplikasi";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Aplikasi />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
