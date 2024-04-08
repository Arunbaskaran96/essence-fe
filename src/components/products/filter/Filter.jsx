import { fetchProducts } from "../../../redux/slices/productSlice";
import classes from "./filter.module.scss";
import { useDispatch } from "react-redux";

function Filter({ filterData, setFilterData }) {
  const clearData = { category: [], brand: [], sort: false, rating: 0 };
  const brands = [
    {
      name: "Fogg",
      value: "fogg",
    },
    {
      name: "Denver",
      value: "denver",
    },
    {
      name: "The Man Company",
      value: "theManCompany",
    },
    {
      name: "Envy",
      value: "envy",
    },
    {
      name: "Ajmal",
      value: "ajmal",
    },
    {
      name: "Wild Stone",
      value: "wildstone",
    },
    {
      name: "Skinn",
      value: "themancompany",
    },
  ];
  const prodDispatch = useDispatch();

  const categories = [
    {
      name: "Men",
      value: "men",
    },
    {
      name: "Women",
      value: "women",
    },
    {
      name: "Unisex",
      value: "both",
    },
  ];

  const handleBrand = (val) => {
    if (filterData.brand.includes(val.value)) {
      const temp = filterData.brand.filter((item) => item != val.value);
      setFilterData({ ...filterData, brand: temp });
    } else {
      const temp = [...filterData.brand, val.value];
      setFilterData({ ...filterData, brand: temp });
    }
  };

  const handleCategory = (val) => {
    if (filterData.category.includes(val.value)) {
      const temp = filterData.category.filter((item) => item != val.value);
      setFilterData({ ...filterData, category: temp });
    } else {
      const temp = [...filterData.category, val.value];
      setFilterData({ ...filterData, category: temp });
    }
  };

  const applyFilterHandler = () => {
    prodDispatch(fetchProducts(filterData));
  };

  const clearFilterHandler = () => {
    setFilterData(clearData);
    prodDispatch(fetchProducts(clearData));
  };

  const handleRating = (e) => {
    setFilterData({ ...filterData, rating: e.target.value });
  };

  const handleSort = (e) => {
    setFilterData({ ...filterData, sort: e.target.value });
  };

  return (
    <div className={classes.container}>
      <div className={classes.filtersContainer}>
        <div className={classes.heading}>
          <h2>Filters</h2>
          <div className={classes.filterAction}>
            <p onClick={applyFilterHandler}>Apply Filter</p>
            <p onClick={clearFilterHandler}>Clear</p>
          </div>
        </div>
        {/* <hr />
        <div className={classes.priceRange}>
          <h3>Price </h3>
          <input className={classes.slider} type="range" />
        </div> */}
        <hr />
        <div className={classes.brands}>
          <h3>Popular Brands</h3>
          {brands.map((brand, index) => {
            return (
              <div key={index} className={classes.inputContainer}>
                <input
                  value={brand.value}
                  onChange={() => handleBrand(brand)}
                  checked={filterData.brand.includes(brand.value)}
                  className={classes.input}
                  type="checkbox"
                />
                <p>{brand.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className={classes.categoryContainer}>
          <h3>Category</h3>
          {categories.map((category, index) => {
            return (
              <div key={index} className={classes.inputContainer}>
                <input
                  onChange={() => handleCategory(category)}
                  value={category.value}
                  checked={filterData.category.includes(category.value)}
                  className={classes.input}
                  type="checkbox"
                />
                <p>{category.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className={classes.ratings}>
          <h3>Rating</h3>
          <div className={classes.inputContainer}>
            <input
              checked={filterData.rating == "4"}
              value="4"
              onChange={handleRating}
              name="ratings"
              className={classes.input}
              type="radio"
            />
            <p> 4⭐ & above</p>
          </div>
          <div className={classes.inputContainer}>
            <input
              checked={filterData.rating == "3"}
              value="3"
              onChange={handleRating}
              name="ratings"
              className={classes.input}
              type="radio"
            />
            <p>3⭐ & above</p>
          </div>
          <div className={classes.inputContainer}>
            <input
              checked={filterData.rating == "2"}
              value="2"
              onChange={handleRating}
              name="ratings"
              className={classes.input}
              type="radio"
            />
            <p>2⭐ & above</p>
          </div>
          <div className={classes.inputContainer}>
            <input
              checked={filterData?.rating == "1"}
              value="1"
              onChange={handleRating}
              name="ratings"
              className={classes.input}
              type="radio"
            />
            <p>1⭐ & above</p>
          </div>
        </div>
        <hr />
        <div className={classes.sortby}>
          <h3>Sort By</h3>
          <div className={classes.inputContainer}>
            <input
              value="des"
              checked={filterData.sort === "des"}
              name="price"
              className={classes.input}
              type="radio"
              onChange={handleSort}
            />
            <p>Price - High to Low</p>
          </div>
          <div className={classes.inputContainer}>
            <input
              checked={filterData.sort === "aes"}
              value="aes"
              name="price"
              className={classes.input}
              type="radio"
              onChange={handleSort}
            />
            <p>Price - Low to High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
