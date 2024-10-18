import React, { useState } from "react";
import Navbar from "../../components/Navbar"; 
import './Prestamos.css'; 

const Prestamos = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleLoanRequest = (e) => {
    e.preventDefault();
    if (amount) {
      setMessage(`Solicitud de préstamo por $${amount} realizada exitosamente.`);
      // Aquí puedes agregar la lógica para enviar la solicitud de préstamo
    } else {
      setMessage("Por favor, ingresa el monto que deseas solicitar como préstamo.");
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="prestamos-container">
        <h1>Solicitud de Préstamo</h1>

        <form onSubmit={handleLoanRequest} className="prestamo-form">
          <div className="form-group">
            <label>Monto del Préstamo</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Monto del préstamo" 
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-button">Solicitar Préstamo</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Prestamos;
