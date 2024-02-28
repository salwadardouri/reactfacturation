import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import BillPayVistoImage from '../images/BillPayVisto.png';

const NavBar = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        credentials: 'include', // Assure que les cookies sont envoyés avec la requête
      });
      if (response.ok) {
        // Rediriger vers la page de connexion ou une autre page après la déconnexion
        window.location.href = '/SignIn';
      } else {
        console.error('Erreur lors de la déconnexion');
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

  return (
    <nav>
      <img src={BillPayVistoImage} alt="BillPayVisto Logo" className="logo-container" />
      <h1 className="billpay-text">BillPay</h1>
      <h1 className="visto-text">Visto</h1>
      <ul>
        <li><Link to="/SignIn" className="navButton Button nav">Sign Up</Link></li>
        <li><Link to="/" className="navButton Button nav">Accueil</Link></li>
        <li><button onClick={handleLogout} className="navButton Button nav">Logout</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
