import React from "react";
import "./styles.scss";
import { InvestSvg } from "../../assets";
import Ellipse from "../ui/dashboard/ellipse";
import Chart from "../ui/dashboard/chart";

const dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dash-lead">
        <h1>Hi, Welcome</h1>

        <div className="invest-box">
          <h2>Invest Now</h2>
          <div className="invest-icon">
            <InvestSvg />
          </div>
        </div>
      </div>

      <div className="dash-card-grid">
        <div className="dash-card total-invested">
          <Ellipse />

          <div className="dash-card-body">
            <h3>Total Invested</h3>

            <div className="amount">&#8358; 35, 001, 500.00</div>

            <span>From 15 Investment Plans</span>
          </div>
        </div>

        <div className="dash-card total-earned">
          <Ellipse />

          <div className="dash-card-body">
            <h3>Total Earned</h3>

            <div className="amount">&#8358; 1, 120, 500.00</div>
          </div>
        </div>

        <div className="dash-card total-payoff">
          <Ellipse />

          <div className="dash-card-body">
            <h3>Total Payoff</h3>

            <div className="amount">&#8358; 501, 500.00</div>
          </div>
        </div>
      </div>

      <div className="latest-investments">
        <h2>Latest Investments</h2>

        <div className="investment-grid">
          <div className="investment-info-card">
            <div className="card-img">
              <div className="card-header">
                <div className="fixed-plan-tag">
                  <span>Fixed Plan</span>
                </div>

                <div className="investment-card-header">
                  <h3>Investment Title</h3>
                  <p>The Company currently operates in 25 states in...</p>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="interest-info">
                <h4>INTEREST</h4>
                <span>13% MONTHLY</span>
              </div>

              <div className="investable-amount-info">
                <h4>INVESTABLE AMOUNT</h4>
                <div className="investable-amount">
                  <div className="exact-amount">
                    &#8358; <span>55,000.00</span>
                  </div>
                  <div className="center">TO</div>
                  <div className="exact-amount">
                    &#8358; <span>155,000.00</span>
                  </div>
                </div>
              </div>

              <div className="investors-info">
                <h4>INVESTORS</h4>
                <span>200</span>
              </div>
            </div>
          </div>

          <div className="investment-graph-container">
            <div className="investment-graph-header">
              <h2>Investment chart</h2>
            </div>

            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
