import React from 'react';
import Logo from '../Logo/Logo';
import './GridContainer.scss';

const GridContainer = ( {children, loading} ) => {
  return (
    <div className='grid-container'>
      <div className="grid-container--content">
        <Logo />
        { children }
      </div>
      <figure className="grid-container--image">
        <img src='/assets/img/illustration.png' alt='TEKBNK - Ilustración' />
      </figure>
    </div>
  );
};

export default GridContainer;
