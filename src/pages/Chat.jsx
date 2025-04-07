import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div>
      <h1>💬 Chat</h1>
      <p>Seu número está correto?</p>
      <button className="chat-button">Ir para o WhatsApp</button>
      <nav className="navbar">
        <Link to="/">🏠 Início</Link>
        <Link to="/fila-digital">📊 Fila Digital</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/perfil">👤 Perfil</Link>
      </nav>
    </div>
  );
};

export default Chat;
