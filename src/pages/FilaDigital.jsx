import { Link } from "react-router-dom";

const FilaDigital = () => {
  return (
    <div>
      <h1>📊 Fila Digital</h1>
      <p>Você está em **8º lugar**</p>
      <p>Tempo estimado: **6 minutos**</p>
      <nav className="navbar">
        <Link to="/">🏠 Início</Link>
        <Link to="/fila-digital">📊 Fila Digital</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/perfil">👤 Perfil</Link>
      </nav>
    </div>
  );
};

export default FilaDigital;
