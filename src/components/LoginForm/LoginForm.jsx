import React from 'react';
import Button from '../Button/Button';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <h1>Iniciá sesión</h1>
      <form>
        <label htmlFor='user'>Usuario</label>
        <input type='text' placeholder='Ingresá tu usuario' />
        <label htmlFor='pass'>Contraseña</label>
        <input type='password' placeholder='Ingresá tu contraseña' />
        <Button value='Ingresar'/>
      </form>
      <a href="#">Olvidé mi contraseña</a>
    </div>
  );
};

export default LoginForm;
