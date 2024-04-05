import classes from "./wishlist.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../assets/heart.svg";
import heartfull from "../../assets/heartfull.svg";
import { isWished } from "../../utils/isWished";
import { addWishList } from "../../redux/slices/wishSlice";
function WhishList() {
  const { wishlist } = useSelector((state) => state.wish);
  const wishDispatch = useDispatch();

  const wishListHandler = (prod) => {
    wishDispatch(addWishList(prod));
  };

  if (wishlist.length == 0) {
    return (
      <div className={classes.emptyWish}>
        <div>
          <h4>My Wishlist (0)</h4>
          <p>Oops! Your wishlist is empty</p>
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
        <h3>My Wishlist - ({wishlist.length})</h3>
      </div>
      <div className={classes.container}>
        {wishlist &&
          wishlist.map((prod) => {
            return (
              <div className={classes.prodContainer} key={prod._id}>
                <div>
                  <img
                    className={classes.image}
                    src={prod.image}
                    alt="prod-image"
                  />
                </div>
                <div className={classes.bottom}>
                  <p>{prod.title}</p>
                  <h5>₹ {prod.price}</h5>
                  <button>Add To Cart</button>
                </div>
                <div
                  onClick={() => wishListHandler(prod)}
                  className={classes.iconContainer}
                >
                  <div>
                    <img
                      src={isWished(prod, wishlist) ? heartfull : heart}
                      className={classes.icon}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default WhishList;
