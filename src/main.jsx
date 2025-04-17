import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Caminho correto para o arquivo CSS
import App from './App.jsx';

// Criando o root e renderizando o componente principal do React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
