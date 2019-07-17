import React from "react";
import Animal from "./Animal";
import axios from "axios";
import { Col } from "reactstrap";

class AnimalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalArray: [{}],
      loading: true
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      userId: this.props.match.params.userId
    });
    axios
      .get(`http://localhost:5050/animal/${this.props.match.params.userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(({ data }) => {
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
