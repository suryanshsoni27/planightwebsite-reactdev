import React from "react";
import { Image } from "react-bootstrap";
import Planight from "../Planightsources/Planight.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/PlanightHeaderImage.css";

function PlanightHeaderImage() {
  return (
    <div>
      <Image src={Planight} fluid alt="1081x250" />
    </div>
  );
}

export default PlanightHeaderImage;
