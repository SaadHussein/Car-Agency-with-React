import star from "../../../assets/Star.png";
import classes from "./TestimonialItem.module.css";

function TestimonialItem(props) {
  return (
    <div className={classes.testimonial}>
      <div className={classes.testimonialItem}>
        <p className={classes.feedback}>{props.description}</p>
        <div className={classes.stars}>
          <img src={star} alt="Star Image" />
          <img src={star} alt="Star Image" />
          <img src={star} alt="Star Image" />
          <img src={star} alt="Star Image" />
          <img src={star} alt="Star Image" />
        </div>
        <div className={classes.reviewer}>
          <p className={classes.reviewerName}>{props.name}</p>
          <p className={classes.reviewerCity}>{props.city}</p>
        </div>
      </div>
      <div className={classes.testimonialImage}>
        <img src={props.image} alt="Car Image" />
      </div>
    </div>
  );
}

export default TestimonialItem;
