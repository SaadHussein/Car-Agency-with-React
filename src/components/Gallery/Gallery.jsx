import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={classes.gallery}>
      <div className={classes.carOne}></div>
      <div className={classes.carTwo}></div>
      <div className={classes.carThree}></div>
      <div className={classes.carFour}></div>
      <div className={classes.carFive}>
        <h1>Tesla Model 3</h1>
        <p>Disruptive, avant-garde, futuristic, innovative.</p>
        <div className={classes.contact}>Contact</div>
      </div>
      <div className={classes.carSix}></div>
      <div className={classes.carSeven}></div>
      <div className={classes.carEight}></div>
      <div className={classes.carNine}></div>
    </div>
  );
}

export default Gallery;
