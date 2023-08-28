import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";
import LoginPopUp from "../../components/LoginPopUp";

//import { useAuthUser } from "react-auth-kit";

const UpBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const singOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate();


  useEffect(() => {
    const checkAuthentication = () => {
      if (isAuthenticated()) {
        setIsLogged(true);
        // navigate("/");
      }
    };
    checkAuthentication();
  }, [isAuthenticated]);

  const handleLoginToggle = () => {
    if (isLogged) {
      singOut();
      setIsLogged(false);
    } else {
      navigate("/");
    }
  };

  return (<>
   
    <div className="up-bar">
      <Link to="/memory-page-form">
        <button className="up-bar-btns memory-btn">צור דף זיכרון+</button>
      </Link>
          <button className="btns up-bar-btns">pop up</button>
        
      {isLogged ? (
        <Link to="/" onClick={handleLoginToggle}>
          <button className="btns up-bar-btns">התנתק</button>
        </Link>
      ) : (
        <Link to="/login" onClick={handleLoginToggle}>
          <button className="btns up-bar-btns">התחבר/י</button>
        </Link>
      )}
      {/* <Link to="/login" onClick={handleLoginToggle}>
        <button className="btns up-bar-btns">
          {isLogged ? "התנתק" : "התחבר/י"}
        </button>
      </Link> */}
      <button className="btns srch-btn">
        {/* <img src="src\assets\images\searchIcon.png" alt="search icon" /> */}
        <img src="src\assets\images\searchIcon.png" alt="search icon" />
      </button>
      <Link to="/" className="logo">
        <img
          src="https://remember.bio/wp-content/uploads/2022/03/%D7%9C%D7%95%D7%92%D7%95-%D7%98%D7%95%D7%91.svg"
          alt=""
          className="logo"
        />
      </Link>
    </div></>
  );
};
export default UpBar;
