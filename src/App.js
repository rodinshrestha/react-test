import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import FirstScreen from "./pages/FirstScreen";
import SecondScreen from "./pages/SecondScreen";
import ThirdScreen from "./pages/ThirdScreen";
import FourthScreen from "./pages/FourthScreen";
import FifthScreen from "./pages/FifthScreen";

function App() {
  const RestrictedRoute = ({ component: Component, ...rest }) => {
    const productItem = useSelector((state) => state?.cart.product);
    return (
      <Route
        {...rest}
        render={(props) =>
          productItem?.length ? (
            <Component {...props} />
          ) : (
            <Redirect to="/first-screen" />
          )
        }
      />
    );
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/first-screen" component={FirstScreen} />
          <Route exact path="/second-screen" component={SecondScreen} />
          <RestrictedRoute exact path="/third-screen" component={ThirdScreen} />
          <RestrictedRoute
            exact
            path="/fourth-screen"
            component={FourthScreen}
          />
          <RestrictedRoute exact path="/fifth-screen" component={FifthScreen} />
          <Redirect from="/" to="/first-screen" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
