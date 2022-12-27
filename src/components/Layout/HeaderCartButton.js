import CartIcon from "../../assets/cart-icon.svg";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const totalAmount = props.totalAmount.toFixed(2);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <img src={CartIcon} alt="cart-icon"></img>
      </span>
      <span className={classes.badge}>£{totalAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
