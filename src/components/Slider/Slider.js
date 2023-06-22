import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.modul.scss";

function Slider() {
  return (
    <div className="slider__container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider1.png"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider 2.png"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider 3.png"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
