import classes from "./home.module.scss";
import cover from "../../assets/cover.jpg";
import delivery from "../../assets/delivery.svg";
import card from "../../assets/credit.svg";
import verify from "../../assets/verify.svg";
import Categories from "../../components/home/categories/Categories";
import Featured from "../../components/home/featured/Featured";

function Home() {
  const services = [
    {
      img: verify,
      heading: "Money Guarantee",
      des: "7 Days Money Back",
    },
    {
      img: delivery,
      heading: "Fast Delivery",
      des: "Within 3-5 business days",
    },
    {
      img: card,
      heading: "Secure Payments",
      des: "All Cards Accepted",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.coverImgContainer}>
        <img className={classes.coverImg} src={cover} alt="cover-pic" />
        <div className={classes.leftSide}>
          <h1>Everything better with a bit of fragrance</h1>
          <p>Choose from our wide variety of fragrances</p>
          <div>
            <button className={classes.btn}>Shop Now</button>
          </div>
        </div>
      </div>
      <div className={classes.serviceCategory}>
        {services.map((service, i) => {
          return (
            <div className={classes.service} key={i}>
              <img className={classes.icon} src={service.img} alt="icon" />
              <h4>{service.heading}</h4>
              <p>{service.des}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.categoriesContainer}>
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className={classes.featuredContainer}>
        <h2>Featured</h2>
        <Featured />
      </div>
    </div>
  );
}

export default Home;
