import React, { useState, useEffect } from "react";
import "./styles.scss";
import Nav from "../../components/ui/dashboard/nav";
import Header from "../../components/ui/dashboard/header";
import Backdrop from "../../components/ui/backdrop";
import { useLocation } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  const location = useLocation();

  const closeNavHandler = () => {
    setOpenNav(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  };

  const openNavHandler = () => {
    setOpenNav(!openNav);

    document.documentElement.classList.toggle("_fixed");
    document.body.classList.toggle("_fixed");
  };

  useEffect(() => {
    closeNavHandler();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="dashboard-layout">
      <Nav open={openNav} />

      <div className="hamburger-wrapper">
        <button
          type="button"
          aria-label="navigation button"
          className={`hamburger hamburger--spin ${openNav ? "is-active" : ""}`}
          onClick={openNavHandler}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <Backdrop open={openNav} clicked={closeNavHandler} />

      <main className="main">
        <Header />

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
