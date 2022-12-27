import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount,() => {}) || 0;

  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt="logo"></img>
        {totalAmount ? <HeaderCartButton totalAmount={totalAmount} /> :''}
      </div>
    </header>
  );
};
export default Header;
