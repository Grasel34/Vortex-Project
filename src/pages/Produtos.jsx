import { useState } from "react";
import "../styles/Produtos.css"; // 

const produtos = [
  { id: 1, nome: "Cerveja", preco: 10 },
  { id: 2, nome: "Whisky", preco: 150 },
];

export default function Produtos() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <div className="container">
      <h2>Lista de Bebidas</h2>
      <div className="produtos">
        {produtos.map((p) => (
          <div key={p.id} className="produto-card">
            <span>{p.nome} - R$ {p.preco}</span>
            <button onClick={() => adicionarAoCarrinho(p)}>Adicionar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
