import React from "react";
import "./styles.scss";
import { EllipseLarge, EllipseSmall } from "../../../../assets";

const ellipse = () => {
  return (
    <div className="ellipse">
      <EllipseLarge />
      <EllipseSmall />
    </div>
  );
};

export default ellipse;
