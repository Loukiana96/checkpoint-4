import React from "react";
import Gift from "./Gift";
import axios from "axios";
import { Col } from "reactstrap";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giftArray: [{}]
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const currentUser = JSON.parse(localStorage.getItem("user")).user.id;
    axios
      .get(`http://localhost:5050/user/${currentUser}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then(({ data }) => {
        this.setState({
          giftArray: data
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title">Tes dons</h2>
        {this.state.giftArray.map((gift, i) => {
          return (
            gift && (
              <Col sm="6" md="4" lg="3" xl="3" key={i}>
                <Gift
                  key={i}
                  pictureUrl={gift.picture}
                  name={gift.name}
                  age={gift.age}
                  species={gift.species}
                  giftId={gift.id}
                  description={gift.description}
                  gift={gift.gift}
                />
              </Col>
            )
          );
        })}
      </React.Fragment>
    );
  }
}

export default UserPage;
