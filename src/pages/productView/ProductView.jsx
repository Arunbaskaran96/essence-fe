import { useEffect, useState } from "react";
import classes from "./productview.module.scss";
import { Link, useParams } from "react-router-dom";
import { isWished } from "../../utils/isWished";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import heart from "../../assets/heart.svg";
import heartfull from "../../assets/heartfull.svg";
import { addWishList } from "../../redux/slices/wishSlice";
import Loading from "../../components/loading/Loading";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState({ about: [] });
  const [loading, setLoading] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wish);
  const wishDispatch = useDispatch();
  const cartDispatch = useDispatch();
  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/v1/product/${id}`
      );
      const result = await response.json();
      setProduct(result.product);
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

  const addtocarthandler = () => {
    cartDispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleWishlist = () => {
    wishDispatch(addWishList(product));
  };

  return (
    <div className={classes.container}>
      <div className={classes.productContainer}>
        <div className={classes.left}>
          <img className={classes.image} src={product.image} alt="prodimage" />
        </div>
        <div className={classes.right}>
          <p className={classes.title}>{product.title}</p>
          <p className={classes.price}>₹ {product.price}</p>
          <p className={classes.brand}>Brand : {product.brand}</p>
          {product &&
            product?.about.map((item, i) => {
              return (
                <div key={i}>
                  <p>✔ {item.des}</p>
                </div>
              );
            })}
          <hr />
          {isWished(product, cart) ? (
            <Link to="/cart">
              <button className={classes.btn}>Go To Cart</button>
            </Link>
          ) : (
            <button className={classes.btn} onClick={addtocarthandler}>
              Add To Cart
            </button>
          )}
        </div>
        <div className={classes.iconContainer} onClick={handleWishlist}>
          <div>
            <img
              src={isWished(product, wishlist) ? heartfull : heart}
              alt="heart-icon"
              className={classes.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
