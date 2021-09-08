import React from "react";
import "./styles.scss";
import Nav from "../../components/ui/dashboard/nav";
import Header from "../../components/ui/dashboard/header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Nav />

      <main className="main">
        <Header />

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
