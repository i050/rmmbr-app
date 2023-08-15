import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useSignIn } from "react-auth-kit";

function LogIn() {
  const signIn = useSignIn();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse.credential);
        var decoded = jwt_decode(credentialResponse.credential);
        console.log(decoded);

        signIn({
          expiresIn: decoded.exp,
          token: credentialResponse.credential,
          tokenType: "Bearer",
          authState: {
            email: decoded.email,
            name: decoded.given_name,
            imgPath: decoded.picture,
            //role:role,
          },
        });
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default LogIn;
