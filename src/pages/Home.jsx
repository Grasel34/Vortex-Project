import { Link } from "react-router-dom";
import '../index.css';  // Caminho corrigido

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center max-w-lg w-full p-6 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          <span className="bg-red-500 text-white p-4 text-xl">
            Se você está vendo isso em vermelho, Tailwind está funcionando! 🎉
          </span>
          Vortex
        </h1>
        <p className="text-xl mb-8 opacity-80">Bem-vindo à nossa loja de bebidas!</p>
        
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            to="/comanda"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold text-white rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            🛒 Comanda
          </Link>
          <Link
            to="/fila-digital"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-lg font-semibold text-white rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            📊 Fila Digital
          </Link>
          <Link
            to="/chat"
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-lg font-semibold text-white rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          >
            💬 Chat
          </Link>
          <Link
            to="/perfil"
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-800 text-lg font-semibold text-white rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            👤 Perfil
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
