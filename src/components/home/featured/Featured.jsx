import { useEffect, useState } from "react";
import classes from "./featured.module.scss";
import { URL } from "../../../config";
import Loading from "../../loading/Loading";
import heart from "../../../assets/heart.svg";
import heartfull from "../../../assets/heartfull.svg";
import { useSelector, useDispatch } from "react-redux";
import { isWished } from "../../../utils/isWished";
import { Link } from "react-router-dom";
import { addWishList } from "../../../redux/slices/wishSlice";
import { addToCart } from "../../../redux/slices/cartSlice";
function Featured() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { wishlist } = useSelector((state) => state.wish);
  const { cart } = useSelector((state) => state.cart);
  const wishDispatch = useDispatch();
  const cartDispatch = useDispatch();

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/trending`);
      const result = await response.json();

      if (result.success) {
        setProducts(result.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={classes.loadingContainer}>
        <Loading />
      </div>
    );
  }

  const handleWish = (prod) => {
    wishDispatch(addWishList(prod));
  };

  const addtocart = (prod) => {
    cartDispatch(addToCart(prod));
  };

  return (
    <div className={classes.container}>
      <div className={classes.productsContainer}>
        {products.map((product, index) => {
          return (
            <div key={index} className={classes.productContainer}>
              <div className={classes.left}>
                <img
                  className={classes.img}
                  src={product.image}
                  alt="prod-img"
                />
              </div>
              <div className={classes.right}>
                <h3 className={classes.trending}>TRENDING</h3>
                <p className={classes.title}>{product.title}</p>
                <h3>₹ {product.price}</h3>
                {isWished(product, cart) ? (
                  <Link to="/cart">
                    <button className={classes.btn}>Go To Cart</button>
                  </Link>
                ) : (
                  <button
                    onClick={() => addtocart(product)}
                    className={classes.btn}
                  >
                    Add to cart
                  </button>
                )}
              </div>
              <div onClick={() => handleWish(product)}>
                <img
                  className={classes.heartIcon}
                  src={isWished(product, wishlist) ? heartfull : heart}
                  alt="heart-icom"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
