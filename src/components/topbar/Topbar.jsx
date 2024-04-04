import classes from "./topbar.module.scss";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import person from "../../assets/person.svg";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div className={classes.container}>
      <div>
        <Link to="/">
          <h2 className={classes.brandName}>Essence</h2>
        </Link>
      </div>
      <div className={classes.inputContainer}>
        <input className={classes.input} type="text" placeholder="Search" />
      </div>
      <div className={classes.actionContainer}>
        <Link to="/wishlist">
          <img className={classes.icon} src={heart} alt="icons" />
        </Link>
        <Link to="/cart">
          <img className={classes.icon} src={cart} alt="icons" />
        </Link>
        <img className={classes.icon} src={person} alt="icons" />
      </div>
    </div>
  );
}

export default Topbar;
