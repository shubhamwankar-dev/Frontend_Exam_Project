import React from "react";
import Row from "react-bootstrap/Row";
import Testimonial from "./Testimonial";
import image1 from "../../assets/person1.avif";
import image2 from "../../assets/person2.avif";
import image3 from "../../assets/person3.avif";
import image4 from "../../assets/people2.jpg";

const Testimonials = () => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      <Testimonial
        img={image3}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ipsum, consectetur id corrupti maiores."
        userName="Shubham Wankar"
      />

      <Testimonial
        img={image4}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ipsum, consectetur id corrupti maiores."
        userName="Aditya Babhulkar"
      />

      <Testimonial
        img={image2}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ipsum, consectetur id corrupti maiores."
        userName="Vedanti Dalane"
      />

      <Testimonial
        img={image1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ipsum, consectetur id corrupti maiores."
        userName="Yash Wadpalliwar"
      />
    </Row>
  );
};

export default Testimonials;
