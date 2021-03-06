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
            <Carousel.Caption className="carouselBg">
              <h3 className="carouselText">Wild Circus</h3>
              <p className="carouselText">Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src="https://www.pixenli.com/image/IZaYV0ae"
              alt="Second slide"
            />

            <Carousel.Caption className="carouselBg">
              <h3 className="carouselText">Wild Circus</h3>
              <p className="carouselText">Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src="https://www.pixenli.com/image/QZ6M_wNy"
              alt="Third slide"
            />

            <Carousel.Caption className="carouselBg">
              <h3 className="carouselText">Wild Circus</h3>
              <p className="carouselText">Le cirque du Futur</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="title">Wild Circus</h1>
        <div className="divConcept">
          <p className="concept">
            Wild Circus est le premier cirque de France à avoir des locaux
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
          <p className="concept">
            Viens vivre une{" "}
            <a
              href="/Twine-Wild-Circus.html"
              type="text/html"
              title="twinestory.html"
              className="concept"
              target="_blank"
            >
              Aventure interactive
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
