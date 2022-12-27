import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const items = useSelector(
    (state) => state.cart.items,
    () => {}
  );
  const totalAmount =
    useSelector(
      (state) => state.cart.totalAmount,
      () => {}
    ) || 0;

  return (
    <>
      {totalAmount  ? (
        <div className={classes["cart-container"]}>
          <ul className={classes["cart-items"]}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  name: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>

          <div className={classes.total}>
            <span>£{totalAmount.toFixed(2)}</span>
          </div>
        </div>
      ):''}
    </>
  );
};

export default Cart;
