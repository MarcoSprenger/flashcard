import React from "react";
import { Col, Row } from "reactstrap";

const Footer = ({ leftMessage, rightMessage }) => (
  <Row>
    <Col>&copy; {leftMessage}</Col>
    <Col className="text-right">{rightMessage}</Col>
  </Row>
);

export default Footer;
