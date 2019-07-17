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
        <div className="m-0">
          <h1 className="title">Wild Circus</h1>
          <p className="concept">
            Wild Circus est le premier cirque de France a avoir des locaux
            permanents. Alors qu'une partie de ses artistes part en tournée 3
            mois dans l'année, l'autre partie propose des spectacles à domicile.
          </p>
          <p className="concept">
            {" "}
            La grande nouveauté apportée par Wild Circus est qu'aucun animal
            n'est utilisé lors du spectacle. En effet, les tours impliquants des
            animaux sont réalisés à partir d'hologramme. En revanche, le cirque
            possède une réserve naturelle qui sert à receuillir des animaux
            blessés ou maltraités.
          </p>
          <p className="concept">
            {" "}
            Le Wild Circus propose également des stages pour initier des
            amateurs aux arts du cirque.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
