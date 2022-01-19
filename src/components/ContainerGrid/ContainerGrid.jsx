import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import './ContainerGrid.scss';

const ContainerGrid = () => {
  return(
    <div className='container-grid'>
      <div className='container-grid-main'>
        <Logo />
        <LoginForm />
      </div>
      <div className="container-grid-secondary">
        <img src='/assets/img/illustration.png' alt='TEKBNK - Ilustración' />
      </div>
    </div>
  );
};

export default ContainerGrid;
