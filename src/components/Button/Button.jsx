import React from 'react';
import './Button.scss';

const Button = ( {value, theme = 'default'}, handle ) => {
  return (
    <button 
      className={`button button_${theme || 'alt'}`} type='submit'>{ value }</button>
  );
};

export default Button;
