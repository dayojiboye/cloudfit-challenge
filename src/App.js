import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";

// layouts
import LandingLayout from "./layout/landingLayout";
import DashboardLayout from "./layout/dashboardLayout";

//pages
import { LandingPage } from "./pages/landing";
import { DashboardPage } from "./pages/dashboard";

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

        <AppRoute
          layout={DashboardLayout}
          path="/dashboard"
          component={DashboardPage}
        />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
