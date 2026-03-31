import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ezt importáljuk
import App from './App.jsx';
import { AuthModalProvider } from './contexts/AuthModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthModalProvider>
        <App />
      </AuthModalProvider>
    </BrowserRouter>
  </StrictMode>,
);