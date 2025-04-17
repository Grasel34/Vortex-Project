import { Link } from "react-router-dom";

const ModernLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-500 via-purple-600 to-pink-500 p-6 text-white">
        <h2 className="text-3xl font-extrabold mb-8">Vortex</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/comanda"
            className="flex items-center px-4 py-3 hover:bg-white hover:text-gray-800 rounded-lg transition-all transform hover:scale-105 focus:outline-none"
          >
            <span className="mr-3">🛒</span> Comanda
          </Link>
          <Link
            to="/fila-digital"
            className="flex items-center px-4 py-3 hover:bg-white hover:text-gray-800 rounded-lg transition-all transform hover:scale-105 focus:outline-none"
          >
            <span className="mr-3">📊</span> Fila Digital
          </Link>
          <Link
            to="/chat"
            className="flex items-center px-4 py-3 hover:bg-white hover:text-gray-800 rounded-lg transition-all transform hover:scale-105 focus:outline-none"
          >
            <span className="mr-3">💬</span> Chat
          </Link>
          <Link
            to="/perfil"
            className="flex items-center px-4 py-3 hover:bg-white hover:text-gray-800 rounded-lg transition-all transform hover:scale-105 focus:outline-none"
          >
            <span className="mr-3">👤</span> Perfil
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Dashboard</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none transition-all">
            Novo Pedido
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pedidos Recentes</h3>
            <p className="text-gray-600">Veja os pedidos mais recentes realizados.</p>
            <Link to="/comanda" className="mt-4 inline-block text-blue-600 hover:underline">Ver todos</Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fila Digital</h3>
            <p className="text-gray-600">Gerencie a fila de espera de clientes.</p>
            <Link to="/fila-digital" className="mt-4 inline-block text-green-600 hover:underline">Ver fila</Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mensagens Recentes</h3>
            <p className="text-gray-600">Veja suas mensagens mais recentes.</p>
            <Link to="/chat" className="mt-4 inline-block text-purple-600 hover:underline">Ver mensagens</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLayout;
