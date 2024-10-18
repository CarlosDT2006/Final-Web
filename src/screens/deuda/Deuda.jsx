import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import './Deuda.css';

const Deuda = () => {
  const [amountDue, setAmountDue] = useState(1500);

  const handlePayment = () => {

    setAmountDue(0);
  };

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
}

export default Deuda;
