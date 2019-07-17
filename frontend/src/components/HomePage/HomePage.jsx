import React from "react";
import "./HomePage.css";
import { Carousel } from "react-bootstrap";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src="https://www.pixenli.com/image/9v34HUGA"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Wild Circus</h3>
              <p>Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src="https://www.pixenli.com/image/IZaYV0ae"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Wild Circus</h3>
              <p>Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src="https://www.pixenli.com/image/QZ6M_wNy"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Wild Circus</h3>
              <p>Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default HomePage;
