import { Route , Switch } from "react-router-dom";
import Home from "../Components/Home";

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      {/*add your routes here*/}

    </Switch>
  );
};

export default Routes;
