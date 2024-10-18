import React from "react";
import Navbar from "../../components/Navbar"; 
import './Cuentas.css'; 

const Cuentas = () => {
  return (
    <div>
      <Navbar />
      
      <div className="cuentas-container">
        <h1>Bienvenido a la Sección de Cuentas</h1>
        <p>Aquí podrás ver toda la información relacionada con tus cuentas.</p>
        
        <div className="account-info">
          <h3>Cuenta Corriente</h3>
          <p>Saldo: $5,000</p>
          <p>Número de cuenta: 123-456-789</p>
        </div>

        <div className="account-info">
          <h3>Cuenta de Ahorros</h3>
          <p>Saldo: $10,000</p>
          <p>Número de cuenta: 987-654-321</p>
        </div>
      </div>
    </div>
  );
}

export default Cuentas;
