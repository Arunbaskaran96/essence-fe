import { useState } from "react";
import classes from "./profile.module.scss";
import { useSelector } from "react-redux";
import ViewProfile from "../../components/profile/ViewProfile";
import Orders from "../../components/profile/Orders";
import Addresses from "../../components/profile/Addresses";
function Profile() {
  const [page, setPage] = useState("profile");
  const { user } = useSelector((state) => state.user);

  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.name}>
          Hi, {user?.user?.firstName} {user?.user?.lastName}
        </h3>
      </div>
      <div className={classes.profileContainer}>
        <div className={classes.actionContainer}>
          <p
            onClick={() => setPage("profile")}
            className={page === "profile" ? classes.active : ""}
          >
            Profile
          </p>
          <p
            onClick={() => setPage("orders")}
            className={page === "orders" ? classes.active : ""}
          >
            Orders
          </p>
          <p
            onClick={() => setPage("addresses")}
            className={page === "addresses" ? classes.active : ""}
          >
            Addresses
          </p>
        </div>
        <div className={classes.pageContainer}>
          {page === "profile" && <ViewProfile />}
          {page === "orders" && <Orders />}
          {page === "addresses" && <Addresses />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
