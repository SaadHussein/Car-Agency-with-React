import { MdShoppingCart } from "react-icons/md";
import classes from "./NavigationInLargeScale.module.css";

function NavigationInLargeScale() {
  return (
    <nav>
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
        <MdShoppingCart color="white" size={28} className={classes.cartLogo} />
        <div className={classes.numberOfItems}>9</div>
      </div>
    </nav>
  );
}

export default NavigationInLargeScale;
