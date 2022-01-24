import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({message, type}) => {

  return (
    <div className={`error-message ${type && `error-message--${type}`} animate__animated animate__fadeInUp animate__faster`}>
      <img className='error-message--icon' src="/assets/img/warning-icon.png" alt="Error" />
      <p className='error-message--text'>{ message.toString() }</p>
    </div>
  );
};

export default ErrorMessage;
