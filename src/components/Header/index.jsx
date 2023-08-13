
import React from "react";
import "./index.css";

const Header = ({ title, size, margin}) => {
  return (
    <div style={{ fontSize: size , margin: margin}} className="headerStyles">
      {title}
    </div>
  );
};

export default Header;
