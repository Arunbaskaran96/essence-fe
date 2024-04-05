import classes from "./topbar.module.scss";
import heart from "../../assets/heart.svg";
import cartIcon from "../../assets/cart.svg";
import person from "../../assets/person.svg";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishList } from "../../redux/slices/wishSlice";
import { fetchCart } from "../../redux/slices/cartSlice";
function Topbar() {
  const { getItem } = useLocalStorage("wishlist");
  const { getItem: cartGetItem } = useLocalStorage("cart");
  const wishListDispatch = useDispatch();
  const cartDispatch = useDispatch();

  const { wishlist } = useSelector((state) => state.wish);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const items = getItem();
    wishListDispatch(fetchWishList(items));
    const cart = cartGetItem();
    cartDispatch(fetchCart(cart));
  }, []);
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
          <div className={classes.hearticon}>
            <img className={classes.icon} src={heart} alt="icons" />
            {wishlist.length > 0 && (
              <div className={classes.wishCount}>
                <span>{wishlist && wishlist.length}</span>
              </div>
            )}
          </div>
        </Link>
        <Link to="/cart">
          <div className={classes.carticon}>
            <img className={classes.icon} src={cartIcon} alt="icons" />
            {cart.length > 0 && (
              <div className={classes.wishCount}>
                <span>{cart && cart.length}</span>
              </div>
            )}
          </div>
        </Link>
        <img className={classes.icon} src={person} alt="icons" />
      </div>
    </div>
  );
}

export default Topbar;
