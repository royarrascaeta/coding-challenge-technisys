import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InputForm from '../InputForm/InputForm';
import Loader from '../Loader/Loader';
import './LostPasswordForm.scss';

const LostPasswordForm = () => {

  const initialForm = {
    dni_type: 'dni',
    dni_number: ''
  };

  const {
    form,
    error,
    loading,
    // response,
    handleChange,
    handleSelectChange,
    handleSubmit}
  = useForm(initialForm);
  
  const options = [
    { value: 'dni', label: 'DNI', selected: true },
    { value: 'ci', label: 'C.I.' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ]

  return (

    <div className='lost-password-form animate__animated animate__fadeInUp animate__faster'>
      <form onSubmit={ handleSubmit }>
        <legend>Olvidé mi contraseña</legend>
        {/* { error && <ErrorMessage />} */}
        <InputForm 
          name='dni_type' 
          label='Tipo de documento' 
          type='select' 
          options={ options }
          onchange={ handleSelectChange }
          value={form.dni_type}
        />
        <InputForm 
          name='dni_number' 
          label='Número de documento' 
          type='number' 
          error={ error.dni_number }
          placeholder="Ingresá tu número de documento"
          onchange={ handleChange }
          value={form.dni_number}
        />
        <div className="lost-password-form--buttons">
          <Link to="/">
            <Button value='Volver' theme='alt'/>
          </Link>
          <Button value='Continuar'/>
        </div>
      </form>
      { loading && <Loader /> }
    </div>
  );
};

export default LostPasswordForm;
