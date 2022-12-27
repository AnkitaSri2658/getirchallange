import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import classes from "./ProductItem.module.css";
import mugImg from "../../../assets/mug.png";
import shirtImg from "../../../assets/shirt.png";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, price ,type} = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <li className={classes.product}>
      <div>
        <img src={type === 'shirt' ? shirtImg : mugImg} alt="productimage" />
        <div className={classes.price}>£{price}</div>
        <h3>{name}</h3>
      </div>
      <div>
        <button onClick={addToCartHandler}>Add</button>
      </div>
    </li>
  );
};
export default ProductItem;
