import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Blog = ({ img, title, date }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} className="blog-img" />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title>{title}</Card.Title>
            <Card.Title className="fs-6 fw-semibold">
              Date Published - {date}
            </Card.Title>
          </div>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            quaerat commodi ea iure, numquam incidunt deleniti ex voluptas dolor
            aliquid quo nostrum, nam quis magnam.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Blog;
