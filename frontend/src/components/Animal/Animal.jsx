import React from "react";
import "./Animal.css";
import { Col, Card, CardBody, CardImg, CardFooter, Button } from "reactstrap";

class Animal extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardImg src={this.props.pictureUrl} alt="Animal" />
          <CardFooter className="row justify-content-center px-0 py-2 mx-auto">
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Nom: {this.props.name}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Age: {this.props.age}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Espèce: {this.props.species}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <Button>Faire un don</Button>
            </Col>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default Animal;
