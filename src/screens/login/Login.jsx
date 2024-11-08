import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [cuenta_id, setNumeroCuenta] = useState("");
  const [tipo, setTipo] = useState("");
  const [saldo, setSaldo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contraseña: password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.usuarioId) {
          localStorage.setItem('usuarioId', data.usuarioId);
          setSuccessMessage(data.message);
          navigate("/cuentas");
        } else {
          setErrorMessage("Error: No se recibió el usuarioId.");
        }
      } else if (response.status === 404) {
        const data = await response.json();
        setErrorMessage(data.message);
      } else {
        setErrorMessage("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Error al iniciar sesión");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          contraseña: password,
          cuenta_id: cuenta_id,
          tipo,
          saldo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setIsRegister(false);
      } else {
        setErrorMessage("Error en el registro");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      setErrorMessage("Error en el registro");
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        {isRegister ? (
          <form className="register-form" onSubmit={handleRegister}>
            {/* ... campos de registro ... */}
            <button type="submit">Crear Cuenta</button>
            <p className="message">
              ¿Ya tienes cuenta? <a href="#" onClick={toggleForm}>Iniciar Sesión</a>
            </p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar Sesión</button>
            <p className="message">
              ¿No tienes cuenta? <a href="#" onClick={toggleForm}>Crear una cuenta</a>
            </p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
