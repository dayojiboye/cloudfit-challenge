import React from "react";

const customSelect = ({ children, ...props }) => {
  return (
    <div className="select_wrapper">
      <select {...props}>{children}</select>
    </div>
  );
};

export default customSelect;
