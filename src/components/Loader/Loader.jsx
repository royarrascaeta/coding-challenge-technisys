import React from 'react';

import './_Loader.scss';


const Loader = () => {
  return (
    <div className='loader-container'>
      <img className='loader-container--loader' src="/assets/img/loader.svg" alt="Cargando..."/>
    </div>
  );
};

export default Loader;
