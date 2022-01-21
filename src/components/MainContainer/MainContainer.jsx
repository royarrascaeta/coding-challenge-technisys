import React from 'react';
import GridContainer from '../GridContainer/GridContainer';
import './MainContainer.scss';

const MainContainer = ( {children} ) => {
  return(
    <main className='main-container'>
      <GridContainer children={ children } />
    </main>
  );
};

export default MainContainer;
