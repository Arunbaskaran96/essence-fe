import classes from "./categories.module.scss";
import men from "../../../assets/menperfume.jpeg";
import women from "../../../assets/womenperfume.jpeg";
import both from "../../../assets/menandwomen.jpeg";
import { Link } from "react-router-dom";
function Categories() {
  const categories = [
    {
      title: "MEN",
      image: men,
      value: "men",
    },
    {
      title: "WOMEN",
      image: women,
      value: "women",
    },
    {
      title: "UNISEX",
      image: both,
      value: "both",
    },
  ];
  return (
    <div className={classes.container}>
      {categories.map((category, index) => {
        return (
          <Link
            to="/products"
            state={{ from: category.value }}
            key={index}
            className={classes.link}
          >
            <div key={index} className={classes.imageContainer}>
              <img
                className={classes.img}
                src={category.image}
                alt="perfume-img"
              />
              <div>
                <h5>{category.title}</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
