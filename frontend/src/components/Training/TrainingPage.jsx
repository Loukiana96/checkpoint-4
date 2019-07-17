import React from "react";
import Training from "./Training";
import axios from "axios";
import { Col } from "reactstrap";

class TrainingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingArray: [{}]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/training/`).then(({ data }) => {
      this.setState({
        trainingArray: data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title">Nos stages</h2>
        {this.state.trainingArray.map((training, i) => {
          return (
            training && (
              <Col sm="6" md="4" lg="3" xl="3" key={i}>
                <Training
                  key={i}
                  pictureUrl={training.picture}
                  title={training.title}
                  date={training.date}
                  trainingId={training.id}
                  description={training.description}
                />
              </Col>
            )
          );
        })}
        <p>Pour plus d'information contacter nous au 06 92 76 24 48</p>
      </React.Fragment>
    );
  }
}

export default TrainingPage;
