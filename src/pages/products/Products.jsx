import Filter from "../../components/products/filter/Filter";
import classes from "./products.module.scss";
function Products() {
  const products = [
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "₹ 219",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {/* <div className={classes.filtersContainer}>
          <div className={classes.heading}>
            <h2>Filters</h2>
            <p>Clear</p>
          </div>
          <hr />
          <div className={classes.priceRange}>
            <h3>Price </h3>
            <input className={classes.slider} type="range" />
          </div>
          <hr />
          <div className={classes.brands}>
            <h3>Popular Brands</h3>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Fogg</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Denver</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>The Man Company</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Envy</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Ajmal</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Wild Stone</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Skinn</p>
            </div>
          </div>
          <hr />
          <div className={classes.categoryContainer}>
            <h3>Category</h3>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Men</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Women</p>
            </div>
            <div className={classes.inputContainer}>
              <input className={classes.input} type="checkbox" />
              <p>Men & Women</p>
            </div>
          </div>
          <hr />
          <div className={classes.ratings}>
            <h3>Rating</h3>
            <div className={classes.inputContainer}>
              <input name="ratings" className={classes.input} type="radio" />
              <p> 4⭐ & above</p>
            </div>
            <div className={classes.inputContainer}>
              <input name="ratings" className={classes.input} type="radio" />
              <p>3⭐ & above</p>
            </div>
            <div className={classes.inputContainer}>
              <input name="ratings" className={classes.input} type="radio" />
              <p>2⭐ & above</p>
            </div>
            <div className={classes.inputContainer}>
              <input name="ratings" className={classes.input} type="radio" />
              <p>1⭐ & above</p>
            </div>
          </div>
          <hr />
          <div className={classes.sortby}>
            <h3>Sort By</h3>
            <div className={classes.inputContainer}>
              <input name="price" className={classes.input} type="radio" />
              <p>Price - High to Low</p>
            </div>
            <div className={classes.inputContainer}>
              <input name="price" className={classes.input} type="radio" />
              <p>Price - Low to High</p>
            </div>
          </div>
        </div> */}
        <Filter />
      </div>
      <div className={classes.right}>
        <h3>Showing 20 of 20 Products</h3>
        <div className={classes.productsContainer}>
          {products.map((product, index) => {
            return (
              <div className={classes.productContainer} key={index}>
                <div>
                  <img
                    className={classes.image}
                    src={product.img}
                    alt="product-image"
                  />
                  <br />
                  <p>{product.title}</p>
                </div>
                <h4>₹ {product.price}</h4>
                <button className={classes.btn}>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
