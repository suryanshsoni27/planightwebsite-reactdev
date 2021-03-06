import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../styles/ImageCard.css";
const ImageCard = ({ image, title, content }) => {
  return (
    <div className="image__card shadow-lg p-3 mb-5 bg-blue rounde">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageCard;
