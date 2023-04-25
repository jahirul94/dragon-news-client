import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div>
        <h5>Login With </h5>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div className="mt-4">
        <h3 className="my-2">Find Us On</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src={bg} alt="Card image" />
          <Card.ImgOverlay>
            <div className="text-center">
                    <h3 className="mt-4">Create an Amazing Newspaper</h3>
                    <p className="my-4"> Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className="text-center mt-4 pt-4">
                         <button className="btn btn-danger px-4 py-2">Learn More</button>
                    </div> 
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default RightNav;
