import classes from "./cart.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Cart() {
  const { cart } = useSelector((state) => state.cart);

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
                        >
                          -
                        </button>
                        <div>1</div>
                        <button className={classes.quantity}>+</button>
                      </div>
                      <h5>₹ {prod.price}</h5>
                      <button className={classes.removeBtn}>
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
                <p>Price - (1-item)</p>
                <p>Shipping Charges</p>
                <p>Tax</p>
              </div>
              <div>
                <p>₹ 300</p>
                <p>₹ 300</p>
                <p>₹ 300</p>
              </div>
            </div>
            <hr />
            <div className={classes.totalContainer}>
              <h4>Total Amount</h4>
              <h4>₹ 1200</h4>
            </div>
            <hr />
            <button className={classes.checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
