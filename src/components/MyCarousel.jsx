import Carousel from "react-bootstrap/Carousel";
import images from "../assets/Assets";

const MyCarousel = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          src={images.carousel1}
          className="d-block w-100"
          alt="Slide 1"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          src={images.carousel1}
          className="d-block w-100"
          alt="Slide 2"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          src={images.carousel1}
          className="d-block w-100"
          alt="Slide 3"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          src={images.carousel1}
          className="d-block w-100"
          alt="Slide 4"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          src={images.carousel1}
          className="d-block w-100"
          alt="Slide 5"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
