import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../styles/Paragraph.css";
function Paragraph({ text, quote }) {
  return (
    <div className="paragraph">
      <Card className="card__para">
        <Card.Header className="card__parahead">{quote}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {text} </p>
            {/*<footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>*/}
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Paragraph;
