import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { name, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <label>{name}</label>
        <div className={classes.summary}>
          <span className={classes.price}>{total.toFixed(2)}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <span className={classes.amount}>{quantity}</span>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
