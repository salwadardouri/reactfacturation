

// Accueil.js
import React from 'react';
import CouvertureImage from '../images/couverture.png';
const Accueil = () => {
  return (
    <div className="cover-container">
    <img src={CouvertureImage} alt="couverture image" className="cover-image" />
    </div>
  );
};

export default Accueil;
