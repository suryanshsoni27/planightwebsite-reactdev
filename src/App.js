import "./App.css";
import React from "react";
import suryansh from "./Planightsources/suryansh.png";
import Nath from "./Planightsources/nath.png";
// import Planight from "./Planightsources/Planight.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import Pavbar from "./Pavbar";
// import PlanightHeaderImage from "./PlanightHeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ImageCard from "./ImageCard";
import Paragraph from "./Paragraph";
// import Header from "./Header";
import Carmove from "./Carmove";
import { auth, provider } from "./firebase";

function App() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="main">
      {/*<Pavbar></Pavbar>*/}
      {/* <PlanightHeaderImage />*/}
      <div className="main__header">
        {/* <img width="500" height="200" src={Planight} alt="" />*/}
      </div>
      <div className="main__title">{/*<Header></Header>*/}</div>

      <div>
        <Carmove />
      </div>

      <div className="row">
        <ImageCard
          className="column"
          image={suryansh}
          title={"Developer"}
          content={"I am the main Developer at planight"}
        />
        <ImageCard
          className="column"
          image={Nath}
          title={"Ceo"}
          content={"I am the CEO of Planight"}
        />
      </div>

      <div>
        <Paragraph />
      </div>

      <div className="buttons">
        <Button variant="primary" size="lg" onClick={signIn}>
          Sign Up
        </Button>
        <Button variant="primary" size="lg" onClick={signIn}>
          Google Sign Up
        </Button>
      </div>
    </div>
  );
}

export default App;
