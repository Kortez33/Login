import React from 'react';
import { Link } from 'react-router-dom'; // Ezt importáljuk
import '../css/Headbar.css';

const Headbar = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className="headbar">
      <div className="headbar-auth-buttons">
        <button className="auth-btn btn-login" onClick={onLoginClick}>
          Belépés
        </button>
        <span className="auth-divider">|</span>
        <button className="auth-btn btn-register" onClick={onRegisterClick}>
          Regisztráció
        </button>
      </div>

      <div className="headbar-items">
        <Link to="/rolunk" className="headbar-item">Rólunk</Link>
        <Link to="/oktatas" className="headbar-item">Oktatás</Link>
        <Link to="/" className="headbar-item">Cégeknek</Link> {/* Ez most mutasson a főoldalra */}
        <Link to="/onkormanyzatoknak" className="headbar-item">Önkormányzatoknak</Link>
      </div>
    </div>
  );
};

export default Headbar;