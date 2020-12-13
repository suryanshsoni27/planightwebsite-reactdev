import "./App.css";
import React from "react";
import suryansh from "./Planightsources/suryansh.png";
import Nath from "./Planightsources/nath.png";
import Planight from "./Planightsources/Planight.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Pavbar from "./Components/Pavbar";
import PlanightHeaderImage from "./Components/PlanightHeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import ImageCard from "./Components/ImageCard";
import Paragraph from "./Components/Paragraph";

function App() {
  return (
    <div className="main">
      <Pavbar></Pavbar>
      {/* <PlanightHeaderImage />*/}
      <div className="main__header">
        {/* <img width="500" height="200" src={Planight} alt="" />*/}
      </div>
      <div className="main__title">
      
        <h1>Welcome to planight</h1>
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
        <Paragraph />
        <Paragraph />
        <Paragraph />
      </div>
    </div>
  );
}

export default App;
