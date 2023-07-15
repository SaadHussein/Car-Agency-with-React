import { MdArrowOutward } from "react-icons/md";
import NavigationInLargeScale from "./NavigationInLargeScale";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <NavigationInLargeScale />
      <div className={classes.headerText}>
        <h1>
          Find the perfect car <br /> for you at YourCar.
        </h1>
        <p>
          We offer a wide range of <br /> cars that cater to your <br /> needs
          and budget. Visit <br /> us today and drive away <br /> with your
          dream car!
        </p>
        <button>
          Discover <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}

export default Header;
