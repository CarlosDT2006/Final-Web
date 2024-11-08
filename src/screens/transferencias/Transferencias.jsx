import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import './Transferencias.css';

const Transferencias = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!fromAccount || !toAccount || !amount) {
      setMessage("");
      setError("Por favor, completa todos los campos antes de realizar la transferencia.");
      return;
    }

    if (amount <= 0) {
      setMessage("");
      setError("El monto debe ser un número positivo.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/transferencia", {
        fromAccount,
        toAccount,
        amount,
      });

      setMessage(`Transferencia de $${amount} realizada de la cuenta ${fromAccount} a la cuenta ${toAccount}.`);
      setError("");
    } catch (err) {
      setError("Hubo un error al realizar la transferencia. Intenta nuevamente.");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="transfer-container">
        <h1>Realizar Transferencia</h1>

        <form onSubmit={handleTransfer} className="transfer-form">
          <div className="form-group">
            <label>Cuenta de Origen</label>
            <input 
              type="text" 
              value={fromAccount} 
              onChange={(e) => setFromAccount(e.target.value)} 
              placeholder="Número de cuenta de origen" 
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Cuenta de Destino</label>
            <input 
              type="text" 
              value={toAccount} 
              onChange={(e) => setToAccount(e.target.value)} 
              placeholder="Número de cuenta de destino" 
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Monto a Transferir</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Monto" 
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Realizando..." : "Realizar Transferencia"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Transferencias;
