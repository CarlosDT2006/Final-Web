import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../../components/Navbar"; 
import './Depositoretiros.css'; 

const DepositosRetiros = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [operationType, setOperationType] = useState("deposito");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (accountNumber && amount) {
      try {
        const response = await axios.post('http://localhost:5000/api/transacciones', {
          cuenta_id: accountNumber,
          tipo: operationType,
          monto: parseFloat(amount),
        });
        
        if (response.status === 200 || response.status === 201) {
          setMessage(`Operación exitosa: ${operationType === "deposito" ? "Depósito" : "Retiro"} de $${amount}`);
          setError("");
          // Limpiar los campos después de una operación exitosa
          setAccountNumber("");
          setAmount("");
          setOperationType("deposito");
        } else {
          setError("No se pudo realizar la operación.");
        }
      } catch (error) {
        setError("Hubo un error al realizar la operación.");
        console.error(error);
      }
    } else {
      setError("Por favor, completa todos los campos antes de realizar la operación.");
      setMessage("");
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="depositos-retiros-container">
        <h1>Realizar Operación</h1>

        <form onSubmit={handleSubmit} className="operacion-form">
          <div className="form-group">
            <label>Número de Cuenta</label>
            <input 
              type="text" 
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
              placeholder="Número de cuenta" 
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Monto</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Monto" 
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Tipo de Operación</label>
            <select value={operationType} onChange={(e) => setOperationType(e.target.value)} className="select-field">
              <option value="deposito">Depósito</option>
              <option value="retiro">Retiro</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Realizar Operación</button>
        </form>

        {/* Mensajes de éxito o error */}
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

export default DepositosRetiros;
