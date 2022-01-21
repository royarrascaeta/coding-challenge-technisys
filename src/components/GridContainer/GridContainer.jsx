import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import './GridContainer.scss';

const GridContainer = () => {
  return (
    <div className='grid-container'>
      <div className="grid-container--content">
        <Logo />
        <LoginForm />
      </div>
      <figure className="grid-container--image">
        <img src='/assets/img/illustration.png' alt='TEKBNK - Ilustración' />
      </figure>
    </div>
  );
};

export default GridContainer;