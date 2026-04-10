import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function Contratar() {
  return <h1>Contratar (em construção)</h1>;
}

function Shows() {
  return <h1>Shows (em construção)</h1>;
}

function Eventos() {
  return <h1>Eventos (em construção)</h1>;
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contratar" element={<Contratar />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
  );
}
