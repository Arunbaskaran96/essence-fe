import { useState } from "react";
import classes from "./wishlist.module.scss";
import { Link } from "react-router-dom";
function WhishList() {
  const [wishList, setWishList] = useState([]);

  if (wishList.length == 0) {
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
  return <div className={classes.container}>WhishList</div>;
}

export default WhishList;
