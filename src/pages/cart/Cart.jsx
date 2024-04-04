import { useState } from "react";
import classes from "./cart.module.scss";
import { Link } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState([]);

  if (cart.length == 0) {
    return (
      <div className={classes.emptyCart}>
        <div>
          <h4>My Cart (0)</h4>
          <p>Oops! Your cart is empty</p>
          <Link to="/products">
            <p>Start shopping!</p>
          </Link>
        </div>
      </div>
    );
  }
  return <div className={classes.container}>Cart</div>;
}

export default Cart;
