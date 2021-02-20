import { Route , Switch } from "react-router-dom";
import DashBoard from "../Components/DashBoard";
import Clients from "../Components/Clients";
import CreateClient from "../Components/Clients/CreateClient";
import UpdateClient from "../Components/Clients/UpdateClient";

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <DashBoard />
      </Route>

      <Route exact path="/clients">
        <Clients />
      </Route>

      <Route exact path="/clients/create">
        <CreateClient />
      </Route>

      <Route exact path ="/clients/update">
        <UpdateClient/>
      </Route>

      {/*add your routes here*/}

    </Switch>
  );
};

export default Routes;
