import React from "react";
import Animal from "./Animal";
import axios from "axios";
import { Col } from "reactstrap";

class AnimalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalArray: [{}]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/animal/`).then(({ data }) => {
      this.setState({
        animalArray: data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title">Nos animaux sauvés</h2>
        {this.state.animalArray.map((animal, i) => {
          return (
            Animal && (
              <Col sm="6" md="4" lg="3" xl="3" key={i}>
                <Animal
                  key={i}
                  pictureUrl={animal.picture}
                  name={animal.name}
                  age={animal.age}
                  species={animal.species}
                  animalId={animal.id}
                  description={animal.description}
                  gift={animal.gift}
                />
              </Col>
            )
          );
        })}
      </React.Fragment>
    );
  }
}

export default AnimalPage;
