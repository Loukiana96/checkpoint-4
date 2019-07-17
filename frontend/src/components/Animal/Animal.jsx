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
            <Col>
              <p>Nom: {this.props.name} </p>
            </Col>
            <Col>
              <p>Age: {this.props.age} ans</p>
            </Col>
            <Col>
              <p>Espèce: {this.props.species}</p>
            </Col>
            <Col>
              <p>Description: {this.props.description}</p>
            </Col>
            <Col>
              <Button>Faire un don</Button>
            </Col>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default Animal;
