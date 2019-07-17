import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      id: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { email, password } = this.state;
    axios
      .post(`http://localhost:5050/auth/login`, {
        email,
        password
      })
      .then(({ data }) => {
        this.setState({
          login: { email: data.email, password: data.password, id: data.id }
        });
        localStorage.setItem("user", JSON.stringify(data));
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2 className="title"> Bienvenue! </h2>
        <Form.Group controlId="email">
          <label htmlFor="email">E-mail</label>
          <Form.Control
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <label htmlFor="pwd">Mot de passe</label>
          <Form.Control
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </Form.Group>
        <Button block type="submit">
          Connecte-toi !
        </Button>
        <Link to="/registration">Pas encore de compte ? Inscris-toi !</Link>
      </Form>
    );
  }
}
export default Login;
