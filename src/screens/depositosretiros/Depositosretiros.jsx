import React, { useState } from "react";
import Navbar from "../../components/Navbar"; 
import './Depositoretiros.css'; 
const DepositosRetiros = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [operationType, setOperationType] = useState("deposito");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountNumber && amount) {
      if (operationType === "deposito") {
        setMessage(`Depósito de $${amount} realizado en la cuenta ${accountNumber}.`);
        // Aquí puedes agregar la lógica para realizar el depósito real
      } else if (operationType === "retiro") {
        setMessage(`Retiro de $${amount} realizado de la cuenta ${accountNumber}.`);
        // Aquí puedes agregar la lógica para realizar el retiro real
      }
    } else {
      setMessage("Por favor, completa todos los campos antes de realizar la operación.");
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

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default DepositosRetiros;
