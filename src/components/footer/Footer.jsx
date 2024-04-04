import classes from "./footer.module.scss";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import location from "../../assets/location.svg";
import email from "../../assets/email.svg";
import mobile from "../../assets/mobile.svg";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.first}>
        <h2>Essence</h2>
        <p>Choose from our wide variety of fragrances</p>
        <div>
          <img src={github} className={classes.icon} alt="icon" />
          <img src={twitter} className={classes.icon} alt="icon" />
          <img src={linkedin} className={classes.icon} alt="icon" />
        </div>
      </div>
      <div className={classes.second}>
        <h3>Quick Links</h3>
        <ul>
          <li>Products</li>
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className={classes.third}>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <img src={location} alt="icons" className={classes.icon} /> 212
            Oakbrook Center, Indiana
          </li>
          <li>
            <img src={mobile} alt="icons" className={classes.icon} /> +91 21200
            21200
          </li>
          <li>
            <img src={email} alt="icons" className={classes.icon} />{" "}
            support@essence.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
