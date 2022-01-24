import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import GridContainer from '../GridContainer/GridContainer';
import Loader from '../Loader/Loader';
import './_MainContainer.scss';

const MainContainer = ( {children} ) => {

  const [ loader, setLoader ] = useContext(AppContext);

  return(
    <main className='main-container'>
      <GridContainer children={ children } loading={ setLoader }/>
      {loader && <Loader />}
    </main>
  );
};

export default MainContainer;
