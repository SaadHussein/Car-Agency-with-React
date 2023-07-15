import { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import classes from "./NavigationInLargeScale.module.css";

function NavigationInLargeScale(props) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      setSticky(window.scrollY > 500);
      if (window.scrollY > 500) {
        props.onSticky(true);
      }
      if (window.scrollY <= 500) {
        props.onSticky(false);
      }
    };
    console.log(window.scrollY);

    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, [window.scrollY]);

  return (
    <nav className={`${sticky ? classes.sticky : ""}`}>
      <div className={classes.logo}>
        <span>Your</span>Car
      </div>
      <div className={classes.navItems}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Cars</li>
          <li>Contact us</li>
        </ul>
        <MdShoppingCart
          size={28}
          className={`${classes.cartLogo} ${
            sticky ? classes.cartLogoSticky : ""
          }`}
        />
        <div className={classes.numberOfItems}>9</div>
      </div>
    </nav>
  );
}

export default NavigationInLargeScale;
