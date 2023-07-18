import { useContext } from "react";
import classes from "./ListNavigationInPhone.module.css";
import { CartContext } from "../../context/cart-context";

function ListNavigationInPhone() {
  const cartCtx = useContext(CartContext);

  const closeListHandler = () => {
    cartCtx.toggleListState();
  };

  return (
    <div
      className={`${classes.ListItems} ${
        cartCtx.listState ? classes.show : ""
      }`}
    >
      <ul>
        <li>
          <a onClick={closeListHandler} href="#">
            Home
          </a>
        </li>
        <li>
          <a onClick={closeListHandler} href="#about">
            About
          </a>
        </li>
        <li>
          <a onClick={closeListHandler} href="#services">
            Services
          </a>
        </li>
        <li>
          <a onClick={closeListHandler} href="#cars">
            Cars
          </a>
        </li>
        <li>
          <a onClick={closeListHandler} href="#footer">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ListNavigationInPhone;
