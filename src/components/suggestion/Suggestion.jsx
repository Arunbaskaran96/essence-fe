import { Link } from "react-router-dom";
import classes from "./suggestion.module.scss";
import Loading from "../loading/Loading";

function Suggestion({ prod, search, loading }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.container}>
      <Link
        className={classes.link}
        onClick={() => search("")}
        to={`/productview/${prod._id}`}
      >
        <p>{prod.title}</p>
        <hr />
      </Link>
    </div>
  );
}

export default Suggestion;
