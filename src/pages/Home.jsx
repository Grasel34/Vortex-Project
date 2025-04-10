import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Vortex</h1>
      <p>Bem-vindo à nossa loja de bebidas!</p>
      <nav className="navbar">
        <Link to="/comanda">🛒 Comanda</Link>
        <Link to="/fila-digital">📊 Fila Digital</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/perfil">👤 Perfil</Link>
      </nav>
    </div>
  );
};

export default Home;
