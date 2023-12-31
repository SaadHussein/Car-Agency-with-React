import { useState, useEffect } from "react";
import { MdShoppingCart, MdFormatListBulleted } from "react-icons/md";
import classes from "./NavigationInLargeScale.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

function NavigationInLargeScale(props) {
  const cartCtx = useContext(CartContext);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 500) {
        setSticky(true);
        props.onSticky(true);
      }
      if (window.scrollY <= 500) {
        setSticky(false);
        props.onSticky(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, [window.scrollY]);

  const stateNavigationHandler = () => {
    cartCtx.toggleNavigation();
    if (cartCtx.listState) {
      cartCtx.toggleListState();
    }
    console.log(cartCtx.navigationState);
  };

  const listItemsInPhoneHandler = () => {
    cartCtx.toggleListState();
    if (cartCtx.navigationState) {
      cartCtx.toggleNavigation();
    }
    console.log(cartCtx.listState);
  };

  return (
    <nav className={`${sticky ? classes.sticky : ""}`}>
      <div className={classes.logo}>
        <span>Your</span>Car
      </div>
      <div className={classes.navItems}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#cars">Cars</a>
          </li>
          <li>
            <a href="#footer">Contact us</a>
          </li>
        </ul>
        <MdShoppingCart
          size={28}
          className={`${classes.cartLogo} ${
            sticky ? classes.cartLogoSticky : ""
          }`}
          onClick={stateNavigationHandler}
        />
        <MdFormatListBulleted
          size={28}
          className={`${classes.listInPhone} ${
            sticky ? classes.cartLogoSticky : ""
          }`}
          onClick={listItemsInPhoneHandler}
        />
        <div className={classes.numberOfItems}>{cartCtx.allAmount}</div>
      </div>
    </nav>
  );
}

export default NavigationInLargeScale;
