import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="d-flex flex-cloumn align-items-center text-center border-0 p-4">
      <div className="bg-success rounded-circle h-50 px-4 py-4">{icon}</div>

      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
