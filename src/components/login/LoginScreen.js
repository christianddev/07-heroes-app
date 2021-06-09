import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({history}) => {
  const {dispatch} = useContext(AuthContext);


  const handleLogin = () => {
    dispatch({
    type: types.login,
    payload: {
      name: 'David'
    }
  })
  history.replace('/');

  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr/>
      <button
        onClick={handleLogin}
        className="btn btn-primary"
      >Login</button>
    </div>
  )
}

export default LoginScreen
