import React from "react";
import "./styles.scss";
import Dropdown from "../../customDropdown";

const header = () => {
  return (
    <header className="dash-header">
      <div className="header-alert">
        <p>Hi Andie! You are yet to complete your account setup</p>
      </div>

      <div className="header-end">
        <div className="header-profile">
          <div className="profile-img">
            <img
              src={require("../../../../assets/boy.png").default}
              alt="profile"
            />
          </div>

          <Dropdown btnText="Andie kane" />
        </div>
      </div>
    </header>
  );
};

export default header;
