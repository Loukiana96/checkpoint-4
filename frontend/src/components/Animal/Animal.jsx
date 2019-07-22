import React from "react";
import "./Animal.css";
import { Col, Card, CardBody, CardImg, CardFooter, Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const currentUser = JSON.parse(localStorage.getItem("user")).user.id;
    axios
      .post(`http://localhost:5050/animal/${currentUser}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        animalId: this.props.animalId,
        gift: this.state.gift
      })
      .then(({ data }) => {
        this.setState({
          gift: data.gift
        });
      });
  }

  handleChange(e) {
    this.setState({
      gift: e.target.value
    });
  }
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
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <Form.Group controlId="gift">
                <h3>Faire un don</h3>
                <label htmlFor="gift">Montant</label>
                <Form.Control
                  type="text"
                  value={this.state.gift}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
              <Button>Faire un don</Button>
            </Form>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

export default Animal;
