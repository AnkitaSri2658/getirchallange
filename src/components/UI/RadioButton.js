import classes from './RadioButton.module.css';

const RadioButton = ({ label, value, onChange, param }) => {
    return (
      <div className={classes.radioBtn}>
        <input type="radio" checked={value} onChange={()=>onChange(param)} id={label}/>
        <label htmlFor={label}>{label}</label>
      </div>
    );
  };

  export default RadioButton;