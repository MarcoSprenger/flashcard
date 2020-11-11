import React from "react";
import { Jumbotron } from "reactstrap";


// with Destructuring the 'props'
const Header = ({ title, subtitle }) => (
  <Jumbotron>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </Jumbotron>
)

// const Header = (props) => (
//   <Jumbotron>
//     <h1>{props.title}</h1>
//     <h3>{props.subtitle}</h3>
//   </Jumbotron>
// );

export default Header;
