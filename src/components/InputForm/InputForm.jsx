import React from 'react';
import Select from 'react-select';
import './InputForm.scss';

const InputForm = ( { name, label, type, placeholder, required, options } ) => {

  const types = ['text','password','number'];

  return (
    <div className="input-form">
      <label className='input-form--label' htmlFor={ name } data-required={ required } >{ label } </label>
      {
        (types.includes(type)) && 
          <input className='input-form--input' type={ type } placeholder={ placeholder } required={ required } />
      }
      {
        type === 'password' && <span className='input-form--pass-ico'><img src="/assets/img/pass-eye.png" alt="Visualizar Contraseña" /></span>
      }
      {
        type === 'select' &&
          <Select options={ options } defaultValue={ options.find( option => option.selected ) } />
      }
    </div>);
};

export default InputForm;
