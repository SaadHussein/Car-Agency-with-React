import TestimonialItem from "./TestimonialItem";
import Slider from "react-slick";
import { testimonials } from "../../../data/testimonials";
import classes from "./Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrowNone(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowNone(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
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
      }}
      onClick={onClick}
    />
  );
}

function Testimonials() {
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 430,
        setting: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrowNone />,
          prevArrow: <SamplePrevArrowNone />,
        },
      },
    ],
  };
  return (
    <div className={classes.testimonials}>
      <h1 className={classes.bigHeader}>TESTIMONIALS</h1>
      <p className={classes.miniHeader}>Testimonials</p>
      <div className={classes.testimonialsList}>
        <Slider {...setting}>
          {testimonials.map((testimonial) => (
            <TestimonialItem
              name={testimonial.name}
              description={testimonial.description}
              key={testimonial.name}
              city={testimonial.city}
              image={testimonial.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
