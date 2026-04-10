import logo from "./img/sonara-logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD:src/telaEscolha.jsx
import { useState } from 'react'
import logo from './img/SONARA LOGO.svg';
import './telaEscolha.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      
    
      <header>
        <img src={logo} alt="logo" />
        <p>SONARA</p>
=======
export default function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Logo Sonara" />
>>>>>>> 4888736f3174038e92ef6b34a0cb83e0c25357a0:src/App.jsx
      </header>

      <main className="main">
        <div className="mensagem">
          <h1>BEM-VINDO A SONARA</h1>
          <p>UNIFICANDO IDEIAS, REALIZANDO SONHOS</p>
          <h2>O QUE VOCÊ BUSCA?</h2>
        </div>

        <div className="botao">
          <button onClick={() => navigate("/contratar")}>
            Contratar Artista
          </button>

          <button onClick={() => navigate("/shows")}>Fazer Shows</button>

          <button onClick={() => navigate("/eventos")}>Ver Eventos</button>
        </div>
      </main>
    </div>
  );
}
