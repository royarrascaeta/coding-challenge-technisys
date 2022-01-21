import React from 'react';
import './InputForm.scss';

const InputForm = ( { name, label, type, placeholder, required } ) => {
  return (
    <div className="input-form">
      <label className='input-form--label' htmlFor={ name } data-required={ required } >{ label } </label>
      <input className='input-form--input' type={ type } placeholder={ placeholder } required={ required } />
      {
        type === 'password' && <span className='input-form--pass-ico'><img src="/assets/img/pass-eye.png" alt="Visualizar Contraseña" /></span>
      }
    </div>);
};

export default InputForm;
