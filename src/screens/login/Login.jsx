import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false); // Estado para alternar entre login y registro
  const navigate = useNavigate();

  // Función para alternar entre formularios
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="login-page">
      <div className="form">
        {isRegister ? (
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button type="submit">Create</button>
            <p className="message">
              Already registered? <a href="#" onClick={toggleForm}>Sign In</a>
            </p>
          </form>
        ) : (
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
            <p className="message">
              Not registered? <a href="/register" onClick={toggleForm}>Create an account</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
