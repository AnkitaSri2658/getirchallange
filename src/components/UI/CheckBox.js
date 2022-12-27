import classes from './CheckBox.module.css';

const Checkbox = ({ label, value, onChange, id }) => {
  return (
    <div className={classes.checkBox}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        value={label} id={label}
      />

      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
