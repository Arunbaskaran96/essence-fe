import classes from "./cart.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../../redux/slices/cartSlice";
import { calGrandTotal } from "../../utils/calculateGrandTotal";
import { SHIPPING_CHARGES, TAX_PRICE } from "../../config";

function Cart() {
  const { cart, total } = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();

  const calgrandtotal = calGrandTotal(total);

  const removeCartHandler = (prod) => {
    cartDispatch(removeCart(prod));
  };

  const increaseHandler = (prod) => {
    cartDispatch(increaseQuantity(prod));
  };
  const decreaseHandler = (prod) => {
    cartDispatch(decreaseQuantity(prod));
  };

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
  return (
    <>
      <div className={classes.heading}>
        <h3>My Cart - ({cart.length})</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.productsContainer}>
            {cart &&
              cart.map((prod) => {
                return (
                  <div key={prod._id} className={classes.prodContainer}>
                    <div className={classes.prodLeft}>
                      <img
                        className={classes.image}
                        src={prod.image}
                        alt="prodimage"
                      />
                    </div>
                    <div className={classes.prodRight}>
                      <p>{prod.title}</p>
                      <div className={classes.qtyContainer}>
                        <button
                          disabled={prod.quantity === 1}
                          className={classes.quantity}
                          onClick={() => decreaseHandler(prod)}
                        >
                          -
                        </button>
                        <div>{prod.quantity}</div>
                        <button
                          onClick={() => increaseHandler(prod)}
                          className={classes.quantity}
                        >
                          +
                        </button>
                      </div>
                      <h5>₹ {prod.price}</h5>
                      <button
                        onClick={() => removeCartHandler(prod)}
                        className={classes.removeBtn}
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.price}>
            <h3>Price Details</h3>
            <hr />
            <div className={classes.priceContainer}>
              <div>
                <p>
                  Price{" "}
                  {cart.length > 1
                    ? `${cart.length}-items`
                    : `${cart.length}-item`}
                </p>
                <p>Tax</p>
                {total < 1000 && <p>Shipping Charges</p>}
              </div>
              <div>
                <p>₹ {total}</p>
                <p>{TAX_PRICE} %</p>
                {total < 1000 && <p>₹ {SHIPPING_CHARGES}</p>}
              </div>
            </div>
            <hr />
            <div className={classes.totalContainer}>
              <h4>Total Amount</h4>
              <h4>₹ {calgrandtotal}</h4>
            </div>
            <hr />
            <Link to="/checkout">
              <button className={classes.checkoutBtn}>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
