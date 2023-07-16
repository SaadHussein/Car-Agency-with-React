import seats from "../../../assets/seats.png";
import luggage from "../../../assets/luggage.png";
import classes from "./CarItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

function CarItem(props) {
  const cartCtx = useContext(CartContext);
  let amount = cartCtx.getItemAmount(props.id);

  const increaseItemHandler = () => {
    console.log("Add");
    cartCtx.addItem({
      name: props.name,
      class: props.class,
      image: props.image,
      id: props.id,
      amount: 1,
    });
  };

  const decreaseItemHandler = () => {
    console.log("remove");
    cartCtx.removeItem(props.id);
  };

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
          <p className={classes.increase} onClick={increaseItemHandler}>
            +
          </p>
          <p className={classes.numberOfItems}>{amount}</p>
          <button
            className={classes.decrease}
            onClick={decreaseItemHandler}
            disabled={amount > 0 ? false : true}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
