import React from "react";
import { Col, Card, CardBody, CardImg, Row } from "reactstrap";
import "./Training.css";

class Training extends React.Component {
  render() {
    return (
      <Card className="card">
        <Row>
          <Col>
            <CardImg
              src={this.props.pictureUrl}
              alt="training"
              className="img"
            />
          </Col>
          <Col>
            <Row>
              <Col className="m-1 p-0 d-flex justify-content-center">
                <h3> {this.props.title}</h3>
              </Col>
              <Col className="m-1 p-0 d-flex justify-content-center">
                <p>Date de début: {this.props.date}</p>
              </Col>
            </Row>
            <Col className="m-1 p-0 d-flex justify-content-center">
              <p> {this.props.description}</p>
            </Col>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Training;
