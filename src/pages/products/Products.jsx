import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/products/filter/Filter";
import classes from "./products.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";
import heart from "../../assets/heart.svg";
import { addWishList } from "../../redux/slices/wishSlice";
import heartfull from "../../assets/heartfull.svg";
import { isWished } from "../../utils/isWished";
import { addToCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function Products() {
  const prodDispatch = useDispatch();
  const { loading, result } = useSelector((state) => state.products);
  const wishDispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wish);
  const { cart } = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();

  useEffect(() => {
    prodDispatch(fetchProducts());
  }, [prodDispatch]);

  if (loading) {
    return <div>Loading</div>;
  }

  const wishlistHandler = (prod) => {
    wishDispatch(addWishList(prod));
  };

  const addtocarthandler = (prod) => {
    cartDispatch(addToCart({ ...prod, quantity: 1 }));
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter />
      </div>
      <div className={classes.right}>
        <h3>Showing 20 of 20 Products</h3>
        <div className={classes.productsContainer}>
          {result.products &&
            result.products.map((product) => {
              return (
                <div className={classes.productContainer} key={product._id}>
                  <div>
                    <img
                      className={classes.image}
                      src={product.image}
                      alt="product-image"
                    />
                    <br />
                    <p>{product.title}</p>
                  </div>
                  <h4>₹ {product.price}</h4>
                  {isWished(product, cart) ? (
                    <Link to="/cart">
                      <button className={classes.btn}>Go To Cart</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => addtocarthandler(product)}
                      className={classes.btn}
                    >
                      Add To Cart
                    </button>
                  )}
                  <div
                    onClickCapture={() => wishlistHandler(product)}
                    className={classes.heartContainer}
                  >
                    <div className={classes.iconContainer}>
                      <div>
                        <img
                          src={isWished(product, wishlist) ? heartfull : heart}
                          className={classes.icon}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
