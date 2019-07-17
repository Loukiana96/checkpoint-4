import React from "react";
import Training from "./Training";
import axios from "axios";
import { Col } from "reactstrap";
import "./Training.css";

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
        <p className="text-center">
          Pour plus d'information contacte-nous au 06 92 76 24 48
        </p>
        {this.state.trainingArray.map((training, i) => {
          return (
            training && (
              <Col key={i}>
                <Training
                  key={i}
                  pictureUrl={training.picture}
                  title={training.title}
                  date={training.session_format_date}
                  trainingId={training.id}
                  description={training.description}
                />
              </Col>
            )
          );
        })}
      </React.Fragment>
    );
  }
}

export default TrainingPage;
