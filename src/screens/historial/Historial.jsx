import React from "react";
import Navbar from "../../components/Navbar"; 
import './Historial.css'; 

const Historial = () => {

  const transactions = [
    { id: 1, type: "Depósito", amount: 500, date: "2024-10-15" },
    { id: 2, type: "Retiro", amount: 200, date: "2024-10-14" },
    { id: 3, type: "Transferencia", amount: 100, date: "2024-10-13" },
    { id: 4, type: "Préstamo", amount: 1000, date: "2024-10-12" },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="historial-container">
        <h1>Historial de Transacciones</h1>

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
                <td>{transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historial;
