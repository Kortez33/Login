import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthModalProvider } from './contexts/AuthModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthModalProvider>
      <App />
    </AuthModalProvider>
  </StrictMode>,
);