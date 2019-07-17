import React from "react";
import { Col, Card, CardBody, CardImg, CardFooter } from "reactstrap";

class Training extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardImg src={this.props.pictureUrl} alt="training" />
          <CardFooter className="row justify-content-center px-0 py-2 mx-auto">
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Titre: {this.props.title}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Date de début: {this.props.date}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Description: {this.props.description}</p>
            </Col>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default Training;
