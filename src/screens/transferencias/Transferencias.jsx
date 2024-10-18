import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // Asegúrate de que la ruta sea correcta
import './Transferencias.css'; // Importa el archivo de estilos

const Transferencias = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    if (fromAccount && toAccount && amount) {
      setMessage(`Transferencia de $${amount} realizada de la cuenta ${fromAccount} a la cuenta ${toAccount}.`);
      // Aquí puedes agregar la lógica para realizar la transferencia real
    } else {
      setMessage("Por favor, completa todos los campos antes de realizar la transferencia.");
    }
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Transfer Section */}
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

          <button type="submit" className="submit-button">Realizar Transferencia</button>
        </form>

        {/* Mensaje de confirmación */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Transferencias;
