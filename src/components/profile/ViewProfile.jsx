import { logout } from "../../redux/slices/userSlice";
import classes from "./profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function ViewProfile() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const logoutHandler = () => {
    userDispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <div className={classes.profileContainer}>
        <div className={classes.left}>
          <h3>FirstName</h3>
          <h3>LastName</h3>
          <h3>Email</h3>
          <h3>Mobile</h3>
        </div>
        <div className={classes.right}>
          <p>: {user.user.firstName}</p>
          <p>: {user.user.lastName}</p>
          <p>: {user.user.email}</p>
          <p>: {user.user.mobile}</p>
        </div>
      </div>
      <div className={classes.profileBtnContainer}>
        <button onClick={logoutHandler} className={classes.profilebtn}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ViewProfile;
