import React from 'react';
import Select from 'react-select';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './InputForm.scss';

const InputForm = ( { name, label, type, placeholder, options, onchange, value, error } ) => {

  const types = ['text','password','number'];

  const customStyles = {
    menu: () => ({}),
    option: () => ({}),
    control: () => ({}),
    singleValue: () => {}
  }

  return (
    <div className="input-form">
      <label className='input-form--label' htmlFor={ name }>{ label } </label>
      {
        (types.includes(type)) && 
          <div className="input-form--container">
            <input 
              className={`input-form--input ${error && 'input-form--error'}`}
              type={ type } 
              name={ name } 
              id={ name } 
              placeholder={ placeholder } 
              onChange = { onchange }
              value={ value }
            />
            {
              type === 'password' && <span className='input-form--pass-ico'><img src="/assets/img/pass-eye.png" alt="Visualizar Contraseña" /></span>
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
