import React from 'react'

const LoginScreen = ({history}) => {
  const handleLogin = () => {
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
