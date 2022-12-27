import classes from "./Footer.module.css";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      ©{thisYear} Market <span>·</span> Privacy Policy{" "}
    </div>
  );
};
export default Footer;
