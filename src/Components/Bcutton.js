import React from "react";
import { Button } from "react-bootstrap";
import { auth, provider } from "../firebase";
import "../styles/Bcutton.css";

function Bcutton({ color, text }) {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="button">
      <Button onClick={signIn} variant={color} className="button__inside">
        {text}
      </Button>
    </div>
  );
}

export default Bcutton;
