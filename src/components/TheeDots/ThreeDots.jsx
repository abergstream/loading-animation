import React from "react";
import "./ThreeDots.css";
const ThreeDots = ({ animationSpeed, primaryColor, secondaryColor }) => {
  return (
    <div className="loading-dots-container">
      <div
        className="loading-dot"
        style={{
          "--primary-background": primaryColor ? primaryColor : "#CCC",
          "--secondary-background": secondaryColor ? secondaryColor : "#AAA",
        }}
      ></div>
      <div
        className="loading-dot"
        style={{
          "--primary-background": primaryColor ? primaryColor : "#CCC",
          "--secondary-background": secondaryColor ? secondaryColor : "#AAA",
        }}
      ></div>
      <div
        className="loading-dot"
        style={{
          "--primary-background": primaryColor ? primaryColor : "#CCC",
          "--secondary-background": secondaryColor ? secondaryColor : "#AAA",
        }}
      ></div>
    </div>
  );
};

export default ThreeDots;
