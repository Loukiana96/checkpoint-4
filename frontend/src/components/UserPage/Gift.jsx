import React from "react";
import { Col, Card, CardBody, CardImg, CardFooter, Button } from "reactstrap";

class Gift extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardImg src={this.props.pictureUrl} alt="Gift" />
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
              <p>Description: {this.props.description}</p>
            </Col>
            <Col xs="5" className="m-1 p-0 d-flex justify-content-center">
              <p>Tes dons: {this.props.gift}</p>
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

export default Gift;
