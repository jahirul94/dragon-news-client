import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center my-4">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </Container>
  );
};

export default Header;
