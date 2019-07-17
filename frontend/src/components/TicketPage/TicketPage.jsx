import React from "react";
import "./TicketPage.css";
import { Table } from "reactstrap";

class TicketPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="title">Billeterie</h2>
        <Table>
          <tr>
            <td>Période \ Spectateur</td>
            <td>Adultes</td>
            <td>Enfant de moins de 12 ans</td>
            <td>Groupes de plus de 10 personnes</td>
            <td>Ecoles</td>
          </tr>
          <tr>
            <td>Lundi à Vendredi (sans Mercredi)</td>
            <td>15€</td>
            <td>7€</td>
            <td>10€ (per person)</td>
            <td>5€ (per person)</td>
          </tr>
          <tr>
            <td>Week-End et Mercredi</td>
            <td>20€</td>
            <td>10€</td>
            <td>15€ (par personne)</td>
            <td>7€ (par personne)</td>
          </tr>
        </Table>
        <h2 className="title">Tournée 2019</h2>
        <div className="tour">
          <h3>Lille: </h3> <p>25 juillet</p>
          <h3>Paris:</h3> <p>2 août</p>
          <h3>Lyon:</h3> <p>16 août</p>
          <h3>Toulouse:</h3> <p>23 août</p>
        </div>
      </React.Fragment>
    );
  }
}

export default TicketPage;
