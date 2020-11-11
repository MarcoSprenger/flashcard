import React from "react";
import { Col, Row } from "reactstrap";

const Footer = ({ leftMessage }) => (
  <Row>
    <Col>&copy; {leftMessage}</Col>
  </Row>
);

export default Footer;
