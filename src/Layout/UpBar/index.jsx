import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";

import { useAuthUser } from "react-auth-kit";

const UpBar = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const singOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const [profileImagePath, setProfileImagePath] = useState(""); // בשביל תמונת הפרופיל

  const authUser = useAuthUser();

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLogged(true);
      console.log(authUser().imgPath);
      if (authUser().imgPath != null && authUser().imgPath != undefined) {
        setProfileImagePath(authUser().imgPath);
      }       
      // if(localStorage.getItem('profilePicture'))
      //   setProfileImagePath(localStorage.getItem('profilePicture'));
    }
    
    // const authStateString = localStorage.getItem('_auth_state');
    // const authState = JSON.parse(authStateString);

    // if (authState) {
    //   setProfileImagePath(authState.imgPath);
    // }
  });

  const handleLoginToggle = () => {
    if (isLogged) {
      singOut();
      setIsLogged(false);
      localStorage.clear();
      if (authUser().connectionType == "facebook") {
        FB.logout(function (response) {
          // Handle the response from the logout attempt.
          if (response.status === "unknown") {
            // User was successfully logged out.
          }
        });
      }
    } else {
      props.openLoginModal();
    }
  };
  return (
    <>
      <div className="up-bar">
        <Link to="/memory-page-form">
          <button className="up-bar-btns memory-btn">צור דף זיכרון+</button>
        </Link>
        {isLogged ? (
          <div onClick={handleLoginToggle}>
            <button className="btns up-bar-btns profile-btn">
              <div className="profile-img-container">
                <img
                  src={profileImagePath}
                  alt="תמונת פרופיל"
                  className="profile-img"
                />
              </div>
            </button>
          </div>
        ) : (
          <div onClick={handleLoginToggle}>
            <button className="btns up-bar-btns"> התחבר/י</button>
          </div>
        )}

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
      </div>
    </>
  );
};
export default UpBar;
