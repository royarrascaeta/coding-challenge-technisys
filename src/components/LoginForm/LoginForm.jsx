import React, { useState } from 'react';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InputForm from '../InputForm/InputForm';
import Loader from '../Loader/Loader';
import './LoginForm.scss';

const LoginForm = () => {

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
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <legend>Iniciá sesión</legend>
        { error && <ErrorMessage />}
        <InputForm name='user' label='Usuario' type='text' placeholder='Ingresá tu usuario' required={true}/>
        <InputForm name='user' label='Contraseña' type='password' placeholder='Ingresá tu contraseña' required={true}/>
        <Button value='Ingresar'/>
      </form>
      <a href="#">Olvidé mi contraseña</a>
      { loader && <Loader /> }
    </div>
  );
};

export default LoginForm;
