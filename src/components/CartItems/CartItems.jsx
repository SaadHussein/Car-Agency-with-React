import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import classes from "./CartItems.module.css";
import { MdDelete } from "react-icons/md";
import CartItem from "./CartItem";

function CartItems() {
  const cartCtx = useContext(CartContext);

  const removeAllHandler = () => {
    cartCtx.removeAllItems();
  };

  return (
    <div
      className={`${classes.cartItems} ${
        cartCtx.navigationState ? classes.show : ""
      }`}
    >
      <div className={classes.itemsInCart}>
        {cartCtx.items.map((item) => (
          <CartItem
            image={item.image}
            name={item.name}
            class={item.class}
            id={item.id}
          />
        ))}
      </div>
      <button className={classes.deleteAll} onClick={removeAllHandler}>
        <MdDelete /> Remove All
      </button>
    </div>
  );
}

export default CartItems;
