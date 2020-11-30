import React from "react";
import { Col, Row } from "reactstrap";

const Footer = ({ message }) => (
  <Row>
    <Col>&copy; {message}</Col>
  </Row>
);

export default Footer;
