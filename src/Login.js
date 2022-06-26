import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pm1.narvii.com/5852/dbd3ae6017eb78d34cafc12752c6c1302d28fe25_hq.jpg"
          alt=""
        />
        <h1>Sign in the Chatting Lobby</h1>
        <p>www.sakura.theking.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
