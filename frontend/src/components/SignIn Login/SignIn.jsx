import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let { firstname, lastname, email, password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      axios
        .post("http://localhost:5050/auth/users", {
          firstname,
          lastname,
          email,
          password
        })
        .then(({ data }) => {
          this.setState({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
          });
        });
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2 className="title"> Rejoins le Wild Circus</h2>
        <Row>
          <Col xs="6">
            <Form.Group controlId="firstname">
              <label htmlFor="firstname">Prénom</label>
              <Form.Control
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs="6">
            <Form.Group controlId="lastname">
              <label htmlFor="lastname">Nom</label>
              <Form.Control
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs="12">
            <Form.Group controlId="email">
              <label htmlFor="email">E-mail</label>
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs="6">
            <Form.Group controlId="password">
              <label htmlFor="pwd">Mot de passe</label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
          </Col>
          <Col xs="6">
            <Form.Group controlId="confirmPassword">
              <label htmlFor="pwd">Confirme ton mot de passe</label>
              <Form.Control
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button block type="submit">
          Rejoins-nous !
        </Button>
        <Link to="/login">Déjà inscrit ? Connecte-toi !</Link>
      </Form>
    );
  }
}

export default SignIn;
