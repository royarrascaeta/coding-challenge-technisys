import React, { useState } from 'react';
import Select from 'react-select';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './_InputForm.scss';

const InputForm = ( { name, label, type, placeholder, options, onchange, value, error, dataRequired } ) => {

  const [showPassword, setShowPassword] = useState(false);

  const types = ['text','password','number'];

  const customStyles = {
    menu: () => ({}),
    option: () => ({}),
    control: () => ({}),
    singleValue: () => {}
  }

  const handleClick = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  }

  return (
    <div className="input-form">
      <label className='input-form--label' htmlFor={ name } data-required={ dataRequired }> { label } </label>
      {
        (types.includes(type)) && 
          <div className="input-form--container">
            <input 
              className={`input-form--input ${error && 'input-form--error'}`}
              type={ (type === 'password' && showPassword) ? 'text' : type } 
              name={ name } 
              id={ name } 
              placeholder={ placeholder } 
              onChange = { onchange }
              value={ value }
            />
            {
              type === 'password' && <button className='input-form--pass-ico' onClick={ handleClick }><img src="/assets/img/pass-eye.png" alt="Visualizar Contraseña" /></button>
            }
          </div>
      }
      
      {
        type === 'select' &&
          <Select 
            className='input-form--select' 
            classNamePrefix='input-form--select' 
            name={ name }
            id={ name }
            options={ options } 
            styles={customStyles} 
            isSearchable={false}
            defaultValue={ options.find( option => option.selected ) } 
            onChange = { onchange }
          />
            
      }

      {
        error && <ErrorMessage message={error} type="input" />
      }

    </div>);
};

export default InputForm;
