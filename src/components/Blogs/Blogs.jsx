import React from "react";
import Blog from "./Blog";
import Row from "react-bootstrap/Row";
import image1 from "../../assets/person1.avif";
import image2 from "../../assets/person3.avif";
import image3 from "../../assets/people2.jpg";

const Blogs = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 d-flex flex-wrap">
      <Blog img={image1} title="Article-1" date="02-Dec-2025" />
      <Blog img={image2} title="Article-2" date="22-Dec-2025" />
      <Blog img={image3} title="Article-3" date="24-Dec-2025" />
    </Row>
  );
};

export default Blogs;
