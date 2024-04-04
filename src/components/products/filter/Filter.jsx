import classes from "./filter.module.scss";

function Filter() {
  return (
    <div className={classes.container}>
      <div className={classes.filtersContainer}>
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
      </div>
    </div>
  );
}

export default Filter;
