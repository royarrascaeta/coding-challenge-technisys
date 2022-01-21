import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <InputForm name='password' label='Contraseña' type='password' placeholder='Ingresá tu contraseña' required={true}/>
        <Button value='Ingresar'/>
      </form>
      <Link to="/lostpassword">Olvidé mi contraseña</Link>
      { loader && <Loader /> }
    </div>
  );
};

export default LoginForm;
