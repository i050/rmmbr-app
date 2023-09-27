import React from "react";
import "./index.css";
import { useSignIn } from "react-auth-kit";
import { useGoogleLogin } from "@react-oauth/google";
import { useUsersContext } from "../../contexts/UsersContext";


import axios from "axios";

const LogInGoogle = () => {
  const { users } = useUsersContext();
  const signIn = useSignIn();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const GoogleUserData = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(GoogleUserData);
        const dbUserData = users.find(
          (user) => user.email === GoogleUserData.data.email
        );
        signIn({
          expiresIn: tokenResponse.expires_in,
          // given_name: GoogleUserData.data.given_name,
          tokenType: "Bearer",
          token: tokenResponse.access_token,
          authState: {
            email: GoogleUserData.data.email,
            name: GoogleUserData.data.given_name,
            imgPath: GoogleUserData.data.picture,
            googleId: GoogleUserData.data.sub,
            dbUserId: dbUserData.id,
            connectionType: "google",
            permissions: dbUserData.permissions,
            role: dbUserData.role,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="login">
      <div className="bordered-container">
        <div className="google-login-btn-container">
          <button className="google-login-btn" type="button" onClick={login}>
            <img
              className="google-logo"
              src="src\assets\images\google-logo-png-29534.png"
              alt="google logo"
            />
            <span>התחברות באמצעות גוגל</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInGoogle;
