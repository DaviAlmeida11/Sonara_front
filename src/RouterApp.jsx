import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./telaEscolha";
import Cadastro from "./cadastro";
import Login from "./login";

// Se você for usar essa função temporária, mantenha-a
function Shows() {
  return <h1>Tela Home (em construção)</h1>;
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Escolha qual será a sua página inicial "/" */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/shows" element={<Shows />} />
        {/* Certifique-se que o componente Contratar existe antes de deixar a rota abaixo */}
        {/* <Route path="/contratar" element={<Contratar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
