import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import './Prestamos.css';

const Prestamos = () => {
  const [usuario_id, setUsuarioId] = useState(""); // Campo para usuario_id
  const [amount, setAmount] = useState("");
  const [plazo, setPlazo] = useState(""); // Campo para plazo
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Función para manejar la solicitud de préstamo
  const handleLoanRequest = async (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setIsSuccess(false);
      setMessage("Por favor, ingresa un monto válido mayor a 0.");
    } else if (!plazo || plazo <= 0) {
      setIsSuccess(false);
      setMessage("Por favor, ingresa un plazo válido mayor a 0.");
    } else if (!usuario_id) {
      setIsSuccess(false);
      setMessage("Por favor, ingresa tu usuario ID.");
    } else {
      try {
        // Enviar solicitud POST con los datos completos
        const response = await axios.post("http://localhost:5000/api/prestamos", {
          usuario_id: usuario_id,
          monto: amount,
          plazo: plazo,
        });

        if (response.status === 200) {
          setIsSuccess(true);
          setMessage(`Solicitud de préstamo por $${amount} a ${plazo} meses realizada exitosamente.`);
        }
      } catch (error) {
        setIsSuccess(false);
        setMessage("Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.");
        console.error("Error en la solicitud de préstamo:", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="prestamos-container">
        <h1>Solicitud de Préstamo</h1>

        <form onSubmit={handleLoanRequest} className="prestamo-form">
          <div className="form-group">
            <label htmlFor="usuario_id">ID de Usuario</label>
            <input 
              type="text"
              id="usuario_id"
              value={usuario_id}
              onChange={(e) => setUsuarioId(e.target.value)}
              placeholder="Tu ID de usuario"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Monto del Préstamo</label>
            <input 
              type="number" 
              id="amount"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Monto del préstamo" 
              className="input-field"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="plazo">Plazo (meses)</label>
            <input 
              type="number"
              id="plazo"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
              placeholder="Plazo en meses"
              className="input-field"
              min="1"
            />
          </div>

          <button type="submit" className="submit-button">Solicitar Préstamo</button>
        </form>

        {message && (
          <p className={isSuccess ? "message success" : "message error"}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Prestamos;
