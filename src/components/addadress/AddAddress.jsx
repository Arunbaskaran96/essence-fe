import { useState } from "react";
import classes from "./addaddress.module.scss";
import { verifyAddress } from "../../utils/verifyNewAddress";
import { URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../redux/slices/userSlice";

function AddAddress({ setAddNew }) {
  const { user } = useSelector((state) => state.user);
  const userDispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [address, setAddress] = useState({
    contactName: "",
    street: "",
    city: "",
    pincode: "",
    contactNo: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyAddress(address, setErrors)) {
      const response = await fetch(`${URL}/address/${user.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      });
      const result = await response.json();
      if (result.success === true) {
        userDispatch(addAddress(address));
        setAddNew(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.contaimer}>
      <div className={classes.inputContainer}>
        <label>Name</label>
        <br />
        <input
          onChange={handleChange}
          value={address.contactName}
          type="text"
          className={classes.input}
          id="contactName"
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
          value={address.contactNo}
          type="text"
          className={classes.input}
          id="contactNo"
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
      <input type="submit" value="Add" className={classes.addBtn} />
    </form>
  );
}

export default AddAddress;
