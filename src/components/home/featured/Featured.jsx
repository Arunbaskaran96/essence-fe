import classes from "./featured.module.scss";
function Featured() {
  const products = [
    {
      img: "https://rukminim1.flixcart.com/image/416/416/k2tc1ow0/perfume/h/m/z/120-combo-perfume-for-men-60ml-60ml-eau-de-parfum-envy-men-women-original-imafm2rjfpucs4py.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/k2tc1ow0/perfume/h/m/z/120-combo-perfume-for-men-60ml-60ml-eau-de-parfum-envy-men-women-original-imafm2rjfpucs4py.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/k2tc1ow0/perfume/h/m/z/120-combo-perfume-for-men-60ml-60ml-eau-de-parfum-envy-men-women-original-imafm2rjfpucs4py.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "219",
    },
    {
      img: "https://rukminim1.flixcart.com/image/416/416/k2tc1ow0/perfume/h/m/z/120-combo-perfume-for-men-60ml-60ml-eau-de-parfum-envy-men-women-original-imafm2rjfpucs4py.jpeg",
      title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml (For Men)",
      price: "219",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.productsContainer}>
        {products.map((product, index) => {
          return (
            <div key={index} className={classes.productContainer}>
              <div className={classes.left}>
                <img className={classes.img} src={product.img} alt="prod-img" />
              </div>
              <div className={classes.right}>
                <h3 className={classes.trending}>TRENDING</h3>
                <p>{product.title}</p>
                <h3>₹ {product.price}</h3>
                <button className={classes.btn}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
