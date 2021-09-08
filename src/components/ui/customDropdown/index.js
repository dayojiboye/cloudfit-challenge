import React from "react";

import { ChevronDownSvg } from "../../../assets";

const dropdown = ({ btnText, ...props }) => {
  return (
    <div className="dropdown-wrapper" {...props}>
      <button>
        <span>{btnText}</span>

        <ChevronDownSvg />
      </button>
    </div>
  );
};

export default dropdown;
