import React, { useEffect, useState } from "react";
import "./index.css";
//import { GoogleLogin } from "@react-oauth/google";
//import jwt_decode from "jwt-decode";
import { useSignIn } from "react-auth-kit";
import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";

const LogIn = () => {
  const signIn = useSignIn();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userData = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(userData);
        signIn({
          expiresIn: tokenResponse.expires_in,
          // given_name: userData.data.given_name,
          tokenType: "Bearer",
          token: tokenResponse.access_token,
          authState: {
            email: userData.data.email,
            name: userData.data.given_name,
            imgPath: userData.data.picture,
            id: userData.data.sub,
            //role:role,
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
        <div className="login-title">:התחבר כדי להמשיך</div>
        <div className="google-login-btn-container">
          <button className="google-login-btn" type="button" onClick={login}>
            <img
              className="google-logo"
              src="src\assets\images\google-logo-png-29534.png"
              alt="google logo"
            />
            <span>התחבר\י באמצעות גוגל</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
