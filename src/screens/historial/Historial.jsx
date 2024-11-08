import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar"; 
import './Historial.css'; 

const Historial = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const usuarioId = localStorage.getItem("user_id"); // Obtener el ID del usuario del almacenamiento

    if (!usuarioId) {
      setError("No se ha encontrado el usuario. Por favor inicia sesión.");
      setLoading(false);
      return;
    }

    // Realizar la solicitud para obtener las transacciones del usuario específico
    axios.get(`http://localhost:5000/api/transacciones/${usuarioId}`)
      .then(response => {
        setTransactions(response.data); // Suponiendo que la respuesta sea un array de transacciones
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar las transacciones:", error);
        setError("Error al cargar las transacciones.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      
      <div className="historial-container">
        <h1>Historial de Transacciones</h1>

        {transactions.length === 0 ? (
          <p>No hay transacciones registradas.</p>
        ) : (
          <table className="historial-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.tipo}</td>
                  <td>${transaction.monto}</td>
                  <td>{transaction.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Historial;
