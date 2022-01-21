import React from 'react';
import LostPasswordForm from '../../components/LostPasswordForm/LostPasswordForm';
import MainContainer from '../../components/MainContainer/MainContainer';

const LostPasswordScreen = () => {
  return <MainContainer children={ <LostPasswordForm /> } />;
};

export default LostPasswordScreen;
