import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
      <li style={styles.navItem}>
          <Link to="/cuentas" style={styles.navLink}>Inicio</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/cuentas" style={styles.navLink}>Cuenta</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/transferencias" style={styles.navLink}>Transferencias</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/depositosretiros" style={styles.navLink}>Depósitos/Retiros</Link>
        </li>
        
        <li style={styles.navItem}>
          <Link to="/prestamos" style={styles.navLink}>Préstamos</Link>
        </li>
        
        {/* <li style={styles.navItem}>
          <Link to="/historial" style={styles.navLink}>Historial</Link>
        </li> */}
        
        {/* <li style={styles.navItem}>
          <Link to="/deuda" style={styles.navLink}>Deuda</Link>
        </li> */}
        <li style={styles.navItem}>
          <Link to="/reportes" style={styles.navLink}>Reportes</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '10px',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      margin: 0,
      padding: 0,
    },
    navItem: {
        margin: '0 10px',
      },
      navLink: {
        color: '#fff',
        textDecoration: 'none',
      },
    };
    
    export default Navbar;