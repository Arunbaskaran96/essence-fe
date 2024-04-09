import { useSelector } from "react-redux";
import classes from "./profile.module.scss";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { URL } from "../../config";
import { formatDate } from "../../utils/formatDate";

function Orders() {
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/order/${user?.user?._id}`);
      const result = await response.json();
      setOrders(result.orders);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <div className={classes.loadingcontainer}>
        <Loading />
      </div>
    );
  }
  return (
    <div className={classes.ordercontainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Ordered On</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>{order.items}</td>
                <td>₹ {order.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
