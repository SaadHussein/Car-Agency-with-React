import classes from "./ServiceItem.module.css";

function ServiceItem(props) {
  return (
    <div className={classes.serviceItem}>
      <img src={props.img} alt="Service Image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceItem;
