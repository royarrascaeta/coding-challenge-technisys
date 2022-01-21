import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className='error-message'>
      <img className='error-message--icon' src="/assets/img/warning-icon.png" alt="Error" />
      <p className='error-message--text'>El nombre de usuario o la contraseña son incorrectos</p>
    </div>
  );
};

export default ErrorMessage;
