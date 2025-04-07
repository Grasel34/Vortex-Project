import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo à Loja de Bebidas</h1>
      <Link to="/produtos">Ver Produtos</Link>
    </div>
  );
}

export default Home;
