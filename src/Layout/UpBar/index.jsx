import React from "react";
import "./index.css";
import{Link} from "react-router-dom"

const UpBar = () => {
  return (
    <>
    <div className="up-bar">
   
      <button className="up-bar-btns memory-btn">צור דף זיכרון+</button>
      <Link to="/login"><button className="up-bar-btns">התחבר\י</button></Link>
      <button className="srch-btn">
        <img src="src\assets\images\searchIcon.png" alt="search" />
      </button>
     <Link to="/" className="logo"><img
        src="https://remember.bio/wp-content/uploads/2022/03/%D7%9C%D7%95%D7%92%D7%95-%D7%98%D7%95%D7%91.svg"
        alt="logo"
        className="logo"
      /></Link> </div>
    </>
  );
};
export default UpBar;