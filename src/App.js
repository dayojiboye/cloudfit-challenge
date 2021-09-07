import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";

// layouts
import LandingLayout from "./layout/landingLayout";

//pages
import { LandingPage } from "./pages/landing";

function App() {
  return (
    <>
      <Switch>
        <AppRoute
          exact
          layout={LandingLayout}
          path="/"
          component={LandingPage}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
