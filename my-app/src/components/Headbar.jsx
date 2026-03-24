import React from 'react';
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
        <span className="headbar-item">Rólunk</span>
        <span className="headbar-item">Oktatás</span>
        <span className="headbar-item">Cégeknek</span>
        <span className="headbar-item">Önkormányzatoknak</span>
      </div>
    </div>
  );
};

export default Headbar;