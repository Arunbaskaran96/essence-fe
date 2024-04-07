import { useSelector, useDispatch } from "react-redux";
import classes from "./payment.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderSuccess } from "../../redux/slices/cartSlice";
function PaymentSuccess() {
  const { cart } = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();

  const clickHandler = () => {
    cartDispatch(orderSuccess());
  };

  return (
    <div className={classes.container}>
      <h3>Your Order has been placed</h3>
      <div className={classes.btnContainer}>
        <button onClick={clickHandler} className={classes.order}>
          Orders
        </button>
        <Link to="/">
          <button onClick={clickHandler} className={classes.cont}>
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className={classes.prodsContainer}>
        {cart &&
          cart.map((prod) => {
            return (
              <div key={prod._id} className={classes.prodContainer}>
                <div>
                  <img
                    src={prod.image}
                    className={classes.image}
                    alt="prodimage"
                  />
                </div>
                <div>
                  <p>{prod.title}</p>
                  <p>₹ {prod.price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PaymentSuccess;
