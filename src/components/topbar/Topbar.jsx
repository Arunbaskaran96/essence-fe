import classes from "./topbar.module.scss";
import heart from "../../assets/heart.svg";
import cartIcon from "../../assets/cart.svg";
import person from "../../assets/person.svg";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishList } from "../../redux/slices/wishSlice";
import { fetchCart } from "../../redux/slices/cartSlice";
import { useDebounce } from "../../hooks/useDebounce";
import Suggestion from "../suggestion/Suggestion";
import { URL } from "../../config";
function Topbar() {
  const { getItem } = useLocalStorage("wishlist");
  const { getItem: cartGetItem } = useLocalStorage("cart");
  const wishListDispatch = useDispatch();
  const cartDispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm);
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (debouncedValue != "") {
      getProducts();
    }
  }, [debouncedValue]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/products?search=${debouncedValue}`);
      const result = await response.json();
      setSearchProducts(result.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
      <div className={classes.first}>
        <Link to="/">
          <h2 className={classes.brandName}>Essence</h2>
        </Link>
        <Link to="/products">
          <p className={classes.brandName}>Shop</p>
        </Link>
      </div>
      <div>
        <div className={classes.inputContainer}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classes.input}
            type="text"
            placeholder="Search"
            value={searchTerm}
          />
        </div>
        {searchTerm.length > 0 && (
          <div className={classes.suggestionContainer}>
            {searchProducts.map((prod) => {
              return (
                <Suggestion
                  key={prod._id}
                  prod={prod}
                  search={setSearchTerm}
                  loading={loading}
                />
              );
            })}
          </div>
        )}
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
        <Link to="/profile">
          <img className={classes.icon} src={person} alt="icons" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
