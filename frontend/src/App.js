import React from "react";
import "./App.css";
import Login from "./components/SignIn Login/Login";
import SignIn from "./components/SignIn Login/SignIn";
import HomePage from "./components/HomePage/HomePage";
import AnimalPage from "./components/Animal/AnimalPage";
import TicketPage from "./components/TicketPage/TicketPage";
import UserPage from "./components/UserPage/UserPage";
import Navbar from "./components/Navbar/Navbar";

import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/accueil" component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={SignIn} />
          <Route path="/animals" component={AnimalPage} />
          <Route path="/ticket" component={TicketPage} />
          <Route path="/users/:idUser" component={UserPage} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
