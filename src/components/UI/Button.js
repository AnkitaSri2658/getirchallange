import React from 'react';

import classes from './Button.module.css';


const Button = ({ type = 'button', onClick, children, styleClass, ...rest }) => {
    
    return (
      <button type={type} onClick={onClick} {...rest} className={`${classes.button} ${classes[styleClass]}` } >
        {children}
      </button>
    );
  };

  export default Button;