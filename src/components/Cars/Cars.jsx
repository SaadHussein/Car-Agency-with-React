import CarItem from "./CarItem";
import Slider from "react-slick";
import { cars } from "../../../data/cars";
import classes from "./Cars.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        height: "18px",
        width: "19px",
        background: "brown",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        height: "18px",
        width: "19px",
        background: "brown",
      }}
      onClick={onClick}
    />
  );
}

function Cars() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={classes.cars} id="cars">
      <h1>CARS</h1>
      <p className={classes.miniTitle}>Cars</p>
      <div className={classes.listOfCars}>
        <Slider {...settings}>
          {cars.map((car) => (
            <CarItem
              image={car.image}
              class={car.class}
              name={car.name}
              key={car.name}
              description={car.description}
              seats={car.seats}
              luggage={car.luggage}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cars;
