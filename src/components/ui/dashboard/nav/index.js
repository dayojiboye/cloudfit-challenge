import React from "react";
import "./styles.scss";
import { ReactComponent as Logo } from "../../../../assets/SFS-LOGOS-4-150x150.svg";
import {
  GridSvg,
  InvestmentSvg,
  TransactionsSvg,
  ShareSvg,
  DownloadSvg,
} from "../../../../assets";
import { NavLink } from "react-router-dom";

const nav = ({ open }) => {
  return (
    <nav className={`nav ${open ? "show" : ""}`}>
      <div className="nav__heading">
        <Logo />
      </div>

      <div className="nav__links">
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <GridSvg />
              <span>Overview</span>
            </NavLink>
          </li>

          <li>
            <a href="/">
              <InvestmentSvg />
              <span>Investment</span>
            </a>
          </li>

          <li>
            <a href="/">
              <TransactionsSvg />
              <span>Transactions</span>
            </a>
          </li>

          <li>
            <a href="/">
              <ShareSvg />
              <span>Invite Friends</span>
            </a>
          </li>

          <li>
            <a href="/">
              <DownloadSvg />
              <span>Download Statement</span>
            </a>
          </li>
        </ul>
      </div>

      <footer className="nav__footer">
        <span>2019 | Copright - sfs Capital</span>
      </footer>
    </nav>
  );
};

export default nav;
