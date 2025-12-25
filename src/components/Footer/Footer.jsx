import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="d-flex justify-content-between align-items-center py-4 px-5 bg-primary flex-wrap flex-md-nowrap gap-3"
    >
      <h3 className="m-0 p-0 fw-bolder text-white">CodeBizz</h3>
      <div className="d-flex gap-4 fs-5">
        <a
          className=" text-white fs-6 fw-semibold text-decoration-none"
          href=""
        >
          HOME
        </a>
        <a
          className=" text-white fs-6 fw-semibold text-decoration-none"
          href=""
        >
          ABOUT
        </a>
        <a
          className=" text-white fs-6 fw-semibold text-decoration-none"
          href=""
        >
          CONTACT
        </a>
        <a
          className=" text-white fs-6 fw-semibold text-decoration-none"
          href=""
        >
          SERVICES
        </a>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Learn More
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </footer>
  );
};

export default Footer;
