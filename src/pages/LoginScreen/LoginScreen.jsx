import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainContainer from '../../components/MainContainer/MainContainer';

const LoginScreen = () => {
  return (
    <MainContainer children={ <LoginForm />} />
  );
};

export default LoginScreen;
