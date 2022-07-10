import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homelogo">
      <text
        className="hometext"
        x="0"
        y="80"
        font-size="80"
        font-weight="900"
        fill="url(#textgradient)"
        stroke="none">
        KG burgers
      </text>
    </div>
  );
};

export default HomePage;
