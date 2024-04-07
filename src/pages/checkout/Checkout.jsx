import { useState } from "react";
import classes from "./checkout.module.scss";
import { useSelector } from "react-redux";
import { calGrandTotal } from "../../utils/calculateGrandTotal";
import { SHIPPING_CHARGES } from "../../config";
import AddAddress from "../../components/addadress/AddAddress";
function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState("");
  const { cart, total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const calculateGrandTotal = calGrandTotal(total);
  const [addnew, setAddNew] = useState(false);

  // const addrress = [
  //   {
  //     contactName: "Arun",
  //     street: "68.A,North Car Street",
  //     city: "Thiruppanandal",
  //     pincode: 612504,
  //     contactNo: 7539913570,
  //     state: "Tamilnadu,India",
  //   },
  //   {
  //     contactName: "Dhilla",
  //     street: "100,Panchayat Street",
  //     city: "Perungudi",
  //     pincode: 600097,
  //     contactNo: 7418541432,
  //     state: "Tamilnadu,India",
  //   },
  // ];

  const handlePayment = async () => {
    window.location = `http://localhost:3000/pay?amount=${calculateGrandTotal}`;
  };
  const addAdressHandler = () => {
    setSelectedAddress("");
    setAddNew(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h3>Checkout</h3>
      </div>
      <div className={classes.checkoutContainer}>
        <div className={classes.left}>
          {addnew ? (
            <div>
              <div className={classes.backBtn}>
                <button onClick={() => setAddNew(false)}>Back</button>
              </div>
              <AddAddress setAddNew={setAddNew} />
            </div>
          ) : (
            <>
              {user && user.user.address > 0 && (
                <div>
                  <h6>Select Address</h6>
                </div>
              )}
              <div className={classes.addressContainer}>
                {user &&
                  user.user.address.map((address, index) => {
                    return (
                      <div key={index} className={classes.address}>
                        <input
                          type="radio"
                          name="address"
                          onChange={() => setSelectedAddress(address)}
                        />
                        <div className={classes.addressText}>
                          <h6>{address.contactName}</h6>
                          <p>
                            {address.street} - {address.pincode}
                          </p>
                          <p>{selectedAddress.city}</p>
                          <p>{address.state}</p>
                          <p>{address.contactNo}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className={classes.addnewaddress}>
                <button onClick={addAdressHandler}>➕ Add Address</button>
              </div>
            </>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.heading}>
            <h6>Order Summary</h6>
          </div>
          <div className={classes.summaryContainer}>
            <h6>Products</h6>
            <hr />
            {cart.map((prod) => {
              return (
                <div className={classes.summary} key={prod._id}>
                  <p className={classes.summaryLeft}>{prod.title}</p>
                  <p className={classes.summaryRight}>₹ {prod.price}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.price}>
            <h6>Price Details</h6>
            <hr />
            <div className={classes.priceContainer}>
              <div className={classes.priceLeft}>
                <p>Total Price</p>
                <p>Tax</p>
                <p>Shipping Charge</p>
                <p>Grand Total</p>
              </div>
              <div className={classes.priceRight}>
                <p>₹ {total}</p>
                <p>5 %</p>
                {total > 1000 ? (
                  <p className={classes.free}>Free</p>
                ) : (
                  <p>{SHIPPING_CHARGES}</p>
                )}
                <p>₹ {calculateGrandTotal}</p>
              </div>
            </div>
          </div>
          <div className={classes.selectedAddress}>
            <h6>Deliver To</h6>
            <hr />
            <div>
              <p>{selectedAddress.contactName}</p>
              <p>
                {selectedAddress.street} - {selectedAddress.pincode}
              </p>
              <p>{selectedAddress.city}</p>
              <p>{selectedAddress.state}</p>
              <p>{selectedAddress.contactNo}</p>
            </div>
          </div>
          <div>
            <button
              disabled={selectedAddress == ""}
              className={classes.placeBtn}
              onClick={handlePayment}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
