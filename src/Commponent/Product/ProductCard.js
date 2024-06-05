import { useContext } from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFornat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/Datapro";
import { Type } from "../../Utility/Action.type";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  // console.log(state)
  const addtocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    // <div>  // maindiv

    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      {/* a link and img */}
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        {/* titl */}
        <h3>{title}</h3>
        {renderDesc && <div>{description}</div>}
        <div className={classes.rating}>
          {/* rating  we bring from 3rd party */}

          <react value={rating?.rate} precision={0.1} />
          {/* count */}
          <small> {rating?.count}</small>
        </div>
        <div>
          {/* price  bring from 3rd party */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addtocart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
