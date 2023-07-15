import TestimonialItem from "./TestimonialItem";
import Slider from "react-slick";
import { testimonials } from "../../../data/testimonials";
import classes from "./Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
