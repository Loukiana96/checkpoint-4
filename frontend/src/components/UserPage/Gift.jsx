import React from "react";
import "./User.css";
import { Col, Card, CardBody, CardImg, CardFooter } from "reactstrap";

class Gift extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardImg src={this.props.pictureUrl} alt="gift" />
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
              <h3>Tes dons:</h3> <p>{this.props.gift} €</p>
            </Col>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default Gift;
