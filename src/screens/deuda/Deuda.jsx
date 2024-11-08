import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import './Deuda.css';

const Deuda = () => {
  const [amountDue, setAmountDue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtener el monto de la deuda desde la API
  useEffect(() => {
    axios.get('http://localhost:5000/api/reportes/deudas/:usuarioId')
      .then(response => {
        setAmountDue(response.data.deuda);
        setLoading(false);
      })
      .catch(error => {
        setError("Error al cargar la deuda.");
        setLoading(false);
      });
  }, []);

  const handlePayment = () => {
    // Realizar el pago (Actualizar la deuda a 0)
    axios.put('http://localhost:5000/api/reportes/deudas/:usuarioId', { monto: amountDue })
      .then(response => {
        setAmountDue(response.data.deuda);
        alert(response.data.message);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />

      <div className="deuda-container">
        <h1>Estado de Deuda</h1>

        <div className="deuda-info">
          <p>Actualmente debes: <strong>${amountDue}</strong></p>
          {amountDue > 0 && (
            <button onClick={handlePayment} className="pay-button">Pagar Deuda</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deuda;
