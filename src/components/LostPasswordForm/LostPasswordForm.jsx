import React, { useState } from 'react';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InputForm from '../InputForm/InputForm';
import Loader from '../Loader/Loader';
import './LostPasswordForm.scss';

const LostPasswordForm = () => {

  const [error, setError] = useState(false);

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(!loader);
    
    setTimeout(() => {
      setLoader(false);
      setError(!error);
    }, 2000);

  }

  return (
    <div className='lost-password-form'>
      <form onSubmit={handleSubmit}>
        <legend>Olvidé mi contraseña</legend>
        { error && <ErrorMessage />}
        <InputForm name='dni_type' label='Tipo de documento' type='select' required={true}/>
        <InputForm name='dni_number' label='Número de documento' type='number' placeholder='Ingresá tu número de documento' required={true}/>
        <div className="lost-password-form--buttons">
          <Button value='Volver' theme='alt'/>
          <Button value='Continuar'/>
        </div>
      </form>
      { loader && <Loader /> }
    </div>
  );
};

export default LostPasswordForm;
