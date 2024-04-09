import { useSelector } from "react-redux";
import classes from "./profile.module.scss";
function Addresses() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className={classes.addressContainer}>
      <div className={classes.addresses}>
        {user?.user?.address.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.address}>
                <h3>{item.contactName}</h3>
                <p>{item.street}</p>
                <p>{item.city}</p>
                <p>{item.state}</p>
                <p>{item.pincode}</p>
                <p>{item.contactNo}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Addresses;
