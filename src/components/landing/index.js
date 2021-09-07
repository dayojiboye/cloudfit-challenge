import React from "react";

import CustomSelect from "../ui/customSelect";
import { ReactComponent as InvestSvg } from "../../assets/Invest.svg";
import { ReactComponent as SunriseSvg } from "../../assets/Later.svg";
import { ReactComponent as LeafSvg } from "../../assets/leaf.svg";
import "./styles.scss";

const landingPage = () => {
  return (
    <div className="landing">
      <div className="lead">
        <h1>Our Mission is to Empower your Financial Freedom</h1>
        <p>
          We help make dreams happen. Come to us with your dreams of a better
          future and we will make it happen.
        </p>
        <a href="/">Get started now</a>
      </div>

      <div className="hero-bg"></div>

      <div className="calculate">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <CustomSelect>
              <option>Select product</option>
            </CustomSelect>
          </div>

          <div className="form-group">
            <input type="text" placeholder="How much do you want to invest?" />
          </div>

          <div className="form-group">
            <CustomSelect>
              <option>For How long?</option>
            </CustomSelect>
          </div>

          <div className="form-group">
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>

      <div className="extra-info">
        <h2>Your guide to financial wellness</h2>

        <div className="extra-info__content">
          <div className="info-block">
            <div className="info-icon">
              <InvestSvg />
            </div>

            <h3>Invest for growth</h3>

            <p>Invest with us and see your wealth grow</p>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <SunriseSvg />
            </div>

            <h3>Think of the rainy day</h3>

            <p>
              Get ready for the rainy day. Invest today in our growth
              instrument.
            </p>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <LeafSvg />
            </div>

            <h3>Grow your knowledge</h3>

            <p>
              Learn how to get more from your money with easy-to-understand
              articles and videos from financial experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
