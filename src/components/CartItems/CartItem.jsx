import { useContext } from "react";
import classes from "./CartItem.module.css";
import { CartContext } from "../../context/cart-context";

function CartItem(props) {
  const cartCtx = useContext(CartContext);
  const amount = cartCtx.getItemAmount(props.id);

  const increaseItemHandler = () => {
    cartCtx.addItem({
      name: props.name,
      class: props.class,
      image: props.image,
      id: props.id,
      amount: 1,
    });
  };

  const decreaseItemHandler = () => {
    cartCtx.removeItem(props.id);
  };
  return (
    <div className={classes.itemInCart}>
      <div className={classes.infoAndNumber}>
        <p className={classes.bigHeader}>{props.class}</p>
        <p className={classes.miniHeader}>{props.name}</p>
        <div className={classes.number}>
          <button className={classes.increase} onClick={decreaseItemHandler}>
            -
          </button>
          <p>{amount}</p>
          <button className={classes.decrease} onClick={increaseItemHandler}>
            +
          </button>
        </div>
      </div>
      <img src={props.image} alt="Car Image" className={classes.imgInCart} />
    </div>
  );
}

export default CartItem;
