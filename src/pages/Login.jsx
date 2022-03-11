import React from 'react'
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg'

export const Login = () => {

  const from = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();     // evitar que se manden los valores como fonmulario
    const formData = new FormData(from.current);    // inicializamos el formData con la refencia al fomulario, el current es para acceder a la info
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <div className="login">
        <div className="form-container">
        <img src={logo} alt="logo" className="logo"/>

        <form action="/" className="form" ref={from} >
            <label for="email" className="label">Email address</label>
            <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" required />

            <label for="password" className="label">Password</label>
            <input type="password" name="password" placeholder="*********" className="input input-password" required/>

            <button 
            onClick={handleSubmit}
            className="primary-button login-button">
              Login
            </button>

            <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button"
        >Sign up</button>
        </div>
    </div>
  )
}
