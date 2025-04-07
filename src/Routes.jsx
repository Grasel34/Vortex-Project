import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comanda from "./pages/Comanda";
import FilaDigital from "./pages/FilaDigital";
import Chat from "./pages/Chat";
import Perfil from "./pages/Perfil";
import Escanear from "./pages/Escanear";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comanda" element={<Comanda />} />
        <Route path="/fila-digital" element={<FilaDigital />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/escanear" element={<Escanear />} />

      </Routes>
    </BrowserRouter>
  );
}
