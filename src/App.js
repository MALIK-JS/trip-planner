import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trips from "./pages/Tripslist";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/trips">
            <Trips />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
