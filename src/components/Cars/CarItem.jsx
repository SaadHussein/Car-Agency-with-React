import seats from "../../../assets/seats.png";
import luggage from "../../../assets/luggage.png";
import classes from "./CarItem.module.css";

function CarItem(props) {
  return (
    <div className={classes.cartItem}>
      <div className={classes.carImage}>
        <img src={props.image} alt="Car Image" />
      </div>
      <p className={classes.class}>{props.class}</p>
      <p className={classes.name}>{props.name}</p>
      <div className={classes.descriptionDiv}>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.control}>
        <div className={classes.seatsAndLuggage}>
          <p>
            <img src={seats} alt="Seats" /> {props.seats} Seats
          </p>
          <p>
            <img src={luggage} alt="Luggage" /> {props.luggage} Luggage
          </p>
        </div>
        <div className={classes.controlNumber}>
          <p className={classes.increase}>+</p>
          <p className={classes.numberOfItems}>7</p>
          <p className={classes.decrease}>-</p>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
