import { useState } from "react";
import classes from "./addaddress.module.scss";
import { verifyAddress } from "../../utils/verifyNewAddress";

function AddAddress() {
  const [errors, setErrors] = useState({});
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    pincode: "",
    mobile: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyAddress(address, setErrors)) {
      console.log(address);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.contaimer}>
      <div className={classes.inputContainer}>
        <label>Name</label>
        <br />
        <input
          onChange={handleChange}
          value={address.name}
          type="text"
          className={classes.input}
          id="name"
        />
        {errors.name && <span className={classes.error}>{errors.name}</span>}
      </div>
      <div className={classes.inputContainer}>
        <label>Street</label>
        <br />
        <input
          onChange={handleChange}
          value={address.street}
          type="text"
          className={classes.input}
          id="street"
        />
        {errors.street && (
          <span className={classes.error}>{errors.street}</span>
        )}
      </div>
      <div className={classes.inputContainer}>
        <label>City</label>
        <br />
        <input
          onChange={handleChange}
          value={address.city}
          type="text"
          className={classes.input}
          id="city"
        />
        {errors.city && <span className={classes.error}>{errors.city}</span>}
      </div>
      <div className={classes.inputContainer}>
        <label>Pincode</label>
        <br />
        <input
          onChange={handleChange}
          value={address.pincode}
          type="number"
          className={classes.input}
          id="pincode"
        />
        {errors.pincode && (
          <span className={classes.error}>{errors.pincode}</span>
        )}
      </div>
      <div className={classes.inputContainer}>
        <label>Mobile</label>
        <br />
        <input
          onChange={handleChange}
          value={address.mobile}
          type="number"
          className={classes.input}
          id="mobile"
        />
        {errors.mobile && (
          <span className={classes.error}>{errors.mobile}</span>
        )}
      </div>
      <div className={classes.inputContainer}>
        <label>State</label>
        <br />
        <input
          onChange={handleChange}
          value={address.state}
          type="text"
          className={classes.input}
          id="state"
        />
        {errors.state && <span className={classes.error}>{errors.state}</span>}
      </div>
      <button className={classes.addBtn}>Add</button>
    </form>
  );
}

export default AddAddress;
