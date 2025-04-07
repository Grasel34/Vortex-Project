import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div>
      <h1>👤 Perfil</h1>
      <p>Mary Jane</p>
      <button>Editar Perfil</button>
      <nav className="navbar">
        <Link to="/">🏠 Início</Link>
        <Link to="/fila-digital">📊 Fila Digital</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/perfil">👤 Perfil</Link>
      </nav>
    </div>
  );
};

export default Perfil;
