import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InputForm from '../InputForm/InputForm';
import './_LoginForm.scss';

const LoginForm = () => {

  const initialForm = {
    user: '',
    password: ''
  };

  const {
    form,
    error,
    response,
    handleChange,
    handleSubmit
  }
  = useForm(initialForm);


  return (
    <div className='login-form animate__animated animate__fadeInUp animate__faster'>
      <form onSubmit={ handleSubmit } >
        <legend>Iniciá sesión</legend>
        { response && <ErrorMessage message="El nombre de usuario o la contraseña son incorrectos" type="form" />}
        <InputForm 
          name='user' 
          label='Usuario' 
          type='text' 
          placeholder='Ingresá tu usuario'
          onchange= { handleChange }
          value= { form.user } 
          error= { error.user }
          dataRequired= {true}
        />
        <InputForm 
          name='password' 
          label='Contraseña' 
          type='password' 
          placeholder='Ingresá tu contraseña' 
          onchange = { handleChange }
          value= { form.password }
          error= { error.password }
          dataRequired= {true}
        />
        <Button value='Ingresar'/>
      </form>
      <Link to="/lostpassword">Olvidé mi contraseña</Link>
    </div>
  );
};

export default LoginForm;
