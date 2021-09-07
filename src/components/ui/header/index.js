import React from "react";

import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/SFS-LOGOS-4-150x150.svg";
import "./styles.scss";

const header = () => {
  return (
    <header className="header">
      <nav>
        <div className="brand-logo">
          <Logo />
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            <li>
              <a href="/" className="signup-btn">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
