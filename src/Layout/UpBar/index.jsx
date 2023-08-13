import React from "react";
import "./index.css";

const UpBar = () => {
  return (
    <>
    <div className="up-bar">
   
      <button className="up-bar-btns memory-btn">צור דף זיכרון+</button>
      <button className="up-bar-btns">התחבר\י</button>
      <button className="srch-btn">
        <img src="src\assets\images\searchIcon.png" alt="search" />
      </button>
      <img
        src="https://remember.bio/wp-content/uploads/2022/03/%D7%9C%D7%95%D7%92%D7%95-%D7%98%D7%95%D7%91.svg"
        alt=""
        className="logo"
      /></div>
    </>
  );
};
export default UpBar;