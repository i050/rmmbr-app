import React, { useEffect } from "react";
import { useSignIn } from "react-auth-kit";
import {users} from "../../assets/DB"
import "./index.css";

const LogInFacebook = () => {
  useEffect(() => {
    window.FB.init({
      appId: "273907372093138",
      cookie: true,
      xfbml: true,
      version: "v17.0",
    });
  }, []);

  const signIn = useSignIn();

  const handleLoginClick = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Logged in successfully:", response.authResponse);
          // Make an API call to get the user's email
          window.FB.api("/me?fields=email", (userResponse) => {
            if (userResponse && !userResponse.error) {
              const email = userResponse.email;
              console.log("User's email:", email);
              const dbUserData = users.find((user) => user.email === email);
              console.log(dbUserData);
              // Continue with your application logic
              signIn({
                expiresIn: response.authResponse.expiresIn,
                tokenType: "Bearer",
                token: response.authResponse.accessToken,
                authState: {
                  imgPath: `https://graph.facebook.com/${response.authResponse.userID}/picture`,
                  email: email, // Use the retrieved email
                  dbUserId: dbUserData.id,
                  facebookId: response.authResponse.userID,
                  connectionType: "facebook",
                  permissions: dbUserData.permissions,
                  role: dbUserData.role,
                },
              });
            } else {
              console.log("Error fetching user's email:", userResponse.error);
            }
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email" }
    );
  };

  return (
    <div className="login">
      <div className="bordered-container">
        <div className="facebook-login-btn-container">
          <button className="facebook-login-btn" onClick={handleLoginClick}>
            <img
              className="facebook-logo"
              src="src\assets\images\facebook-logo.png"
              alt="facebook logo"
            />
            <span>התחברות באמצעות פייסבוק</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInFacebook;
