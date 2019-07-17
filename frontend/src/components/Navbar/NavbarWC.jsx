import React from "react";
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class NavbarWC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar expand="md" className="header">
        <NavLink to="/" className="titleSite">
          Wild Circus
        </NavLink>
        <NavbarToggler
          onClick={() => {
            this.toggle();
          }}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto text-center" navbar>
            <NavItem className="navItem">
              <NavLink to="/animals">Nos Animaux</NavLink>
            </NavItem>
            <NavItem className="navItem text-center">
              <NavLink to="/training">Nos Stages</NavLink>
            </NavItem>
            <NavItem className="navItem text-center">
              <NavLink to="/ticket">Billeterie</NavLink>
            </NavItem>
            <NavItem className="navItem text-center">
              <NavLink to="/user/:idUser">Tes Dons</NavLink>
            </NavItem>
            <NavItem className="navItem text-center">
              <NavLink to="/login">Connexion</NavLink>
            </NavItem>
            <NavItem className="navItem text-center">
              <NavLink to="/registration">Inscription</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarWC;
