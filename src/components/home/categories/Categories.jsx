import classes from "./categories.module.scss";
import men from "../../../assets/menperfume.jpeg";
import women from "../../../assets/womenperfume.jpeg";
import both from "../../../assets/menandwomen.jpeg";
function Categories() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={men} alt="perfume-img" />
        <div>
          <h5>MEN</h5>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={women} alt="perfume-img" />
        <div>
          <h5>WOMEN</h5>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={both} alt="perfume-img" />
        <div>
          <h5>MEN & WOMEN</h5>
        </div>
      </div>
    </div>
  );
}

export default Categories;
