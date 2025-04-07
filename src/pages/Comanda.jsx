import { Link } from "react-router-dom";

const Comanda = () => {
  return (
    <div>
      <h1>🛒 Comanda</h1>
      <p>Total: R$ 189,62</p>
      <button>Finalizar Pedido</button>
      <nav className="navbar">
        <Link to="/">🏠 Início</Link>
        <Link to="/fila-digital">📊 Fila</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/perfil">👤 Perfil</Link>
      </nav>
    </div>
  );
};

export default Comanda;
