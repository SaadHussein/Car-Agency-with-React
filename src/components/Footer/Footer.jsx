import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import mail from "../../../assets/mail.png";
import call from "../../../assets/call.png";
import location from "../../../assets/location.png";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer} id="footer">
      <div className={classes.above}>
        <div className={classes.about}>
          <h1>
            <span>Your</span> Car
          </h1>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        <div className={classes.letter}>
          <h1>News Letter</h1>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className={classes.mailInput}>
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
          <div className={classes.socialLogos}>
            <BsFacebook color="#12273D" size={24} />
            <BsTwitter color="#12273D" size={24} />
            <FaInstagram color="#12273D" size={24} />
          </div>
        </div>
        <div className={classes.contact}>
          <h1>Contact</h1>
          <div className={classes.info}>
            <div className={classes.location}>
              <img src={location} alt="Location Image" />
              <p>2038 2nd Avenue, Las Vegas, United States</p>
            </div>
            <div className={classes.phoneNumber}>
              <img src={call} alt="Call Image" />
              <div className={classes.numbers}>
                <p>01444773421423</p>
                <p>01477678449405</p>
              </div>
            </div>
            <div className={classes.mail}>
              <img src={mail} alt="Mail Image" />
              <p>info@YourCar.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.lower}>
        <p>© Copyright 2023 · YourCar All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
