import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Testimonial = ({ img, text, userName }) => {
  return (
    <Col>
      <Card className="border-0 ">
        <Card.Body className="text-center">
          <div className="text-img">
            <img src={img} alt="" />
          </div>
          <Card.Title className="mb-3">{text}</Card.Title>

          <div className="d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </div>

          <Card.Text>
            <span>{userName}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Testimonial;
