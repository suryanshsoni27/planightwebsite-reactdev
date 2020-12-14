import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "holderjs";
import Planight from "../Planightsources/Planight.png";
import "../styles/Carmove.css";

function Carmove() {
  return (
    <div className="car">
      <Carousel className="row text-center">
        <Carousel.Item interval={1000} className="column">
          <img className="center-block w-50" src={Planight} alt="First slide" />
          <Carousel.Caption>
            <h3>Our Website</h3>
            <p>Our Website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="center-block w-50" src={Planight} alt="Third slide" />
          <Carousel.Caption>
            <h3>Our App</h3>
            <p>Our App</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="center-block w-50 "
            src={Planight}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>About us</h3>
            <p>About us</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carmove;
