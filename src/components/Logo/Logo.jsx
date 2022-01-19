import React from 'react';
import './Logo.scss';

const Logo = () => {
  return(
    <div className='logo'>
      <img src='/assets/img/isotipo_tekbnk.png' alt='TEKBANK - Logo' />
      <span>TEK<strong>BNK</strong></span>
    </div>
  );
};

export default Logo;
