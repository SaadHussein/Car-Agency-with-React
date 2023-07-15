import ServiceItem from "./ServiceItem";
import serviceImageOne from "../../../assets/serviceone.png";
import serviceImageTwo from "../../../assets/servicetwo.png";
import serviceImageThree from "../../../assets/servicethree.png";
import classes from "./Services.module.css";

const servicesItems = [
  {
    img: serviceImageOne,
    title: "Car Sales",
    description:
      "At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you are in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.",
  },
  {
    img: serviceImageTwo,
    title: "Car Rental",
    description:
      "If you are in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.",
  },
  {
    img: serviceImageThree,
    title: "Car Selling",
    description:
      "At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get your vehicle with minimal effort.",
  },
];

function Services() {
  return (
    <div className={classes.services} id="services">
      <h1>SERVICES</h1>
      <p className={classes.miniTitle}>Services</p>
      <div className={classes.servicesList}>
        {servicesItems.map((item) => (
          <ServiceItem
            img={item.img}
            title={item.title}
            key={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
