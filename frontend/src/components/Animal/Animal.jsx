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
              <h3>Nom:</h3> <p>{this.props.name} </p>
            </Col>
            <Col>
              <h3>Age:</h3> <p>{this.props.age} ans</p>
            </Col>
            <Col>
              <h3>Espèce:</h3> <p>{this.props.species}</p>
            </Col>
            <Col>
              <h3>Description:</h3> <p>{this.props.description}</p>
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
